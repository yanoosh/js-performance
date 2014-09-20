"use strict";

var tester = require('../tester');

!function () {
    var obj = {
        a: 123,
        b: 123,
        c: 123,
        d: 123
    };

    tester.scenario = function () {

        this.result = obj.a;
        obj.b = this.n;
        if ("c" in obj) {}
        obj.d = function () {};
    };
}();