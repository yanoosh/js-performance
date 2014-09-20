"use strict";

var tester = new (require('../tester'));

var test = function () {
    this.prop = '123';
};
var context = {prop: null};

tester.binded = test.bind(context);

tester.scenario = function () {
    this.binded();
};