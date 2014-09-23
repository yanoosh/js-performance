"use strict";

var tester = new (require('../tester'));
tester.value1 = [];
tester.value2 = null;
tester.scenario = function () {
    this.result1 = false;
    if (this.value1) {
        if (this.value1.length) {
            this.result1 = true;
        }
    }
    this.result2 = false;
    if (this.value2) {
        if (this.value2.length) {
            this.result2 = true;
        }
    }
}