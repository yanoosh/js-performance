"use strict";

var tester = require('../tester');

tester.interval = 10;
tester.scenario = function () {
    var x = 1000;
    var value1;
    var value2;
    var value3;
    var value4;

    while(x--) {
        value1 = x;
        value2 = x;
        value3 = x;
        value4 = x;
    }
}