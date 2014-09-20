"use strict";

var tester = new (require('../tester'));

!function () {
    var obj1 = {
        obj2: {
            a: 123,
            b: 123,
            c: 123,
            d: 123
        }
    };

    tester.scenario = function () {
        var _obj2 = obj1.obj2;

        this.result = _obj2.a;
        _obj2.b = this.n;
        if ("c" in _obj2) {}
        _obj2.d = function () {};
    };
}();