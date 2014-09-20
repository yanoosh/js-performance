"use strict";

var tester = new (require('../tester'));

!function() {
    var prv1 = 1;
    var prv2 = 1;
    var prv3 = 1;
    var prv4 = 1;
    tester.prop1 = null;
    tester.prop2 = null;
    tester.prop3 = null;
    tester.prop4 = null;

    tester.scenario = function () {
        this.prop1 = prv1;
        this.prop2 = prv2;
        this.prop3 = prv3;
        this.prop4 = prv4;
    };
}();