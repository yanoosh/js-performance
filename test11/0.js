"use strict";

var tester = new (require('../tester'));

var test = function () {
    this.prop = '123';
}
var context = {prop: null};

tester.scenario = function () {
    test.call(context)
};