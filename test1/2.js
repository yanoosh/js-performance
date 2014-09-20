"use strict";

var tester = require('../tester');

tester.value = [];
tester.scenario = function () {
    this.value[this.n] = function () {
        this.release();
    };
    this.value[this.n] = null;
};

tester.run();

