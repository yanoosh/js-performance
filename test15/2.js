"use strict";

var tester = new (require('../tester'));

!function () {
    var obj = {
        a: 123,
        b: 123,
        c: 123,
        d: 123
    };

    tester.scenario = function () {
        var _obj = obj;

        this.result = _obj.a;
        _obj.b = this.n;
        if ("c" in _obj) {}
        _obj.d = function () {};
    };
}();