class Vector {
  constructor(private x: Number, private y: Number) {
  }

  getX(): Number {
    return this.x;
  }

  getY(): Number {
    return this.y;
  }

  fail(): void {
    throw new Error("this is failing all the time");
  }

  failIndirect(): void {
    this.fail();
  }
}

function demoCrash() {
  (new Vector(1, 2)).failIndirect();
}

function demoCrashWrapper() {
  [1, 2, 3].forEach(() => {
    demoCrash();
  })
}
demoCrashWrapper.property = 42;

try {
  demoCrashWrapper();
} catch (e) {
  console.log(e);
}

