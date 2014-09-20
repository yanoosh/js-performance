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
    this.a = 123;
    this.a = 124;
    this.a = 125;
    this.a = 126;
};