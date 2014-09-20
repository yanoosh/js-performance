"use strict";

var tester = new (require('../tester'));

tester.value = [];
tester.scenario = function () {
    this.value[this.n] = function () {
        this.release();
    };
    this.value[this.n] = null;
    delete this.value[this.n];
};

