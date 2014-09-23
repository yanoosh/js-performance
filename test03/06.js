"use strict";

var tester = new (require('../tester'));
tester.value1 = [];
tester.value2 = null;
tester.scenario = function () {
    this.result1 = null !== this.value1 && undefined !== this.value1 && this.value1.length;
    this.result2 = null !== this.value2 && undefined !== this.value2 && this.value2.length;
}