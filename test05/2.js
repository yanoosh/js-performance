"use strict";

var tester = new (require('../tester'));

var s0 = 's0';
tester.a = function() {
    var s1 = 's1';
    tester.b = function () {
        var s2 = 's2';
        tester.c = function () {
            var _ = s1;
        }
    }
};
tester.a(); tester.b();

tester.scenario = function () {
    tester.c()
};
