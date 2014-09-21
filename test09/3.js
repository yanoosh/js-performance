"use strict";

var tester = new (require('../tester'));

tester.scenario = function () {
    ({prop:123}).toString();
};