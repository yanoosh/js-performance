"use strict";

var tester = require('../tester');

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

        this.result = obj1.obj2.a;
        obj1.obj2.b = this.n;
        if ("c" in obj1.obj2) {}
        obj1.obj2.d = function () {};
    };
}();