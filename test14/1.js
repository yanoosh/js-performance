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
    a = 123;
    a = 124;
    a = 125;
    a = 126;
};