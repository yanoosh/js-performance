"use strict";

var tester = require('../tester');

var s0 = 's0';
tester.a = function() {
    var s1 = 's1';
    tester.b = function () {
        var s2 = 's2';
        tester.c = function () {
            var _ = 's3';
        }
    }
};
tester.a(); tester.b();

tester.scenario = function () {
    tester.c()
};
