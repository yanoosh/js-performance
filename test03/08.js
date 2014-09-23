"use strict";

var tester = new (require('../tester'));
tester.value1 = [];
tester.value2 = null;
tester.scenario = function () {
    if (this.value1 && this.value1.length) {
        this.result1 = true;
    } else {
        this.result1 = false;
    }
    if (this.value2 && this.value2.length) {
        this.result2 = true;
    } else {
        this.result2 = false;
    }
}