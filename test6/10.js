"use strict";

var tester = new (require('../tester'));

tester.obj = {exist: 1};

tester.scenario = function () {
    if ('notexist' in this.obj) {}
}