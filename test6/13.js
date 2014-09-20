"use strict";

var tester = require('../tester');

tester.obj = {exist: 1, 'exist..': 2};

tester.scenario = function () {
    if ('exist..' in this.obj) {}
}