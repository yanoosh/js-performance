"use strict";

var tester = new (require('../tester'));

var a = {
    b: {
        c: {
            d: null
        }
    }
};
tester.a = a;

tester.scenario = function () {
    a.b.c.d = 123;
    a.b.c.d = 124;
    a.b.c.d = 125;
    a.b.c.d = 126;
};