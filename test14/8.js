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
    this.a.b.c.d = 123;
    this.a.b.c.d = 124;
    this.a.b.c.d = 125;
    this.a.b.c.d = 126;
};