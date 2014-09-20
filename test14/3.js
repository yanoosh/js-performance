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
    a.b.c = 123;
    a.b.c = 124;
    a.b.c = 125;
    a.b.c = 126;
};