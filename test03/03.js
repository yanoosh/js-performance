"use strict";

var tester = new (require('../tester'));
tester.value1 = [];
tester.value2 = null;
tester.scenario = function () {
    this.result1 = this.value1 instanceof Array && this.value1.length;
    this.result2 = this.value2 instanceof Array && this.value2.length;
}