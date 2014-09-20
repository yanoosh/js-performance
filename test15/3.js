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
        var a = obj.a;

        this.result1 = a;
        this.result2 = a;
        this.result3 = a;
        this.result4 = a;
    };
}();