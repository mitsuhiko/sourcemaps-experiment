all: compile run

compile:
	@./node_modules/.bin/tsc input.ts
	@./node_modules/.bin/terser -c ecma=2015 -m toplevel --source-map "includeSources,url='input.min.js.map'" -o input.min.js -- input.js

run:
	@node input.js; node input.min.js
