"use strict";

var tester = new (require('../tester'));

tester.value = [];
tester.scenario = function () {
    this.value[this.n] = function () {
        this.release();
    };
    delete this.value[this.n];
};