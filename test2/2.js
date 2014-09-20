"use strict";

var tester = require('../tester');

tester.interval = 10;
tester.scenario = function () {
    var x = 1000;

    while(x--) {
        var value1 = x;
        var value2 = x;
        var value3 = x;
        var value4 = x;
    }
}