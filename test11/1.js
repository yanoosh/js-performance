"use strict";

var tester = require('../tester');

var test = function () {
    this.prop = '123';
};
var context = {prop: null};

tester.binded = function () {
    test.apply(context, arguments)
};

tester.scenario = function () {
    this.binded();
};