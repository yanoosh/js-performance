"use strict";

var tester = require('../tester');

tester.obj = {exist: 1};

tester.scenario = function () {
    if (this.obj.exist) {}
}