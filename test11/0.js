"use strict";

var tester = require('../tester');

var test = function () {
    this.prop = '123';
}
var context = {prop: null};

tester.scenario = function () {
    test.call(context)
};