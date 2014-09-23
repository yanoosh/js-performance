"use strict";

var tester = new (require('../tester'));
tester.value = [];
tester.scenario = function () {
    this.result = !!this.value;
}