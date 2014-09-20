"use strict";

var tester = new (require('../tester'));
tester.value = [];
tester.scenario = function () {
    var result;

//    this.result = Boolean(this.value);
//    this.result = !!this.value;
    this.result = true == !!this.value;
//    this.result = true == this.value;
}