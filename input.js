var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.getX = function () {
        return this.x;
    };
    Vector.prototype.getY = function () {
        return this.y;
    };
    Vector.prototype.fail = function () {
        throw new Error("this is failing all the time");
    };
    Vector.prototype.failIndirect = function () {
        this.fail();
    };
    return Vector;
}());
function demoCrash() {
    (new Vector(1, 2)).failIndirect();
}
function demoCrashWrapper() {
    [1, 2, 3].forEach(function () {
        demoCrash();
    });
}
demoCrashWrapper.property = 42;
try {
    demoCrashWrapper();
}
catch (e) {
    console.log("stack: + " + e.stack);
}
