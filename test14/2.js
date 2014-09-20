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
    a.b = 123;
    a.b = 124;
    a.b = 125;
    a.b = 126;
};