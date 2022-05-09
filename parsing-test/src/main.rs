use std::path::Path;

use swc_common::sync::Lrc;
use swc_common::{SourceMap, Spanned};
use swc_ecma_ast::EsVersion;
use swc_ecma_parser::EsConfig;
use swc_ecma_parser::{lexer::Lexer, Parser, StringInput, Syntax};

fn main() {
    let cm: Lrc<SourceMap> = Default::default();

    let fm = cm.load_file(Path::new("../input.min.js")).unwrap();
    let lexer = Lexer::new(
        Syntax::Es(EsConfig::default()),
        EsVersion::Es2020,
        StringInput::from(&*fm),
        None,
    );

    let mut parser = Parser::new_from(lexer);

    let module = parser.parse_module().unwrap();
    let span = module.body[0].span();
    dbg!(span);
    //dbg!(module);
}
