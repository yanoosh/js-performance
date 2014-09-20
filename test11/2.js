"use strict";

var tester = new (require('../tester'));

var test = function () {
    this.prop = '123';
};
var context = {prop: null};

tester.binded = function (a, b, c, d) {
    test.call(context, a, b, c, d)
};

tester.scenario = function () {
    this.binded();
};