"use strict";

var tester = require('../tester');

var a = {
    b: {
        c: {
            d: null
        }
    }
};
tester.a = a;

tester.scenario = function () {
    this.a.b.c = 123;
    this.a.b.c = 124;
    this.a.b.c = 125;
    this.a.b.c = 126;
};