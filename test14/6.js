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
    this.a.b = 123;
    this.a.b = 124;
    this.a.b = 125;
    this.a.b = 126;
};