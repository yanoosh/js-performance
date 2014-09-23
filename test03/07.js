"use strict";

var tester = new (require('../tester'));
tester.value1 = [];
tester.value2 = [];
tester.scenario = function () {
    try {
        this.result1 = 0 < this.value1.length;
    } catch (e) {
        this.result1 = false;
    }
    try {
        this.result2 = 0 < this.value2.length;
    } catch (e) {
        this.result2 = false;
    }
}