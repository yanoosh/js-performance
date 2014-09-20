"use strict";

var tester = require('../tester');

tester.value = [];
tester.scenario = function () {
    this.value[this.n] = function () {
        this.release();
    };
    delete this.value[this.n];
};

tester.run();

