"use strict";

var tester = require('../tester');

!function() {
    tester._prv1 = 1;
    tester._prv2 = 1;
    tester._prv3 = 1;
    tester._prv4 = 1;
    tester.prop1 = null;
    tester.prop2 = null;
    tester.prop3 = null;
    tester.prop4 = null;

    tester.scenario = function () {
        this.prop1 = this._prv1;
        this.prop2 = this._prv2;
        this.prop3 = this._prv3;
        this.prop4 = this._prv4;
    }
}();