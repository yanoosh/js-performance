"use strict";

var tester = require('../tester');

tester.interval = 10;
tester.scenario = function () {

    var y = 1000;

    var obj1 = {};
    var obj2 = {};
    var obj3 = {};
    var obj4 = {};
    var obj5 = {};
    var obj6 = {};
    var obj7 = {};
    var obj8 = {};
    var obj9 = {};
    var obj10 = {};

    while(y--) {
        obj1['a' + y] = 'a';
        obj2['a' + y] = 'a';
        obj3['a' + y] = 'a';
        obj4['a' + y] = 'a';
        obj5['a' + y] = 'a';
        obj6['a' + y] = 'a';
        obj7['a' + y] = 'a';
        obj8['a' + y] = 'a';
        obj9['a' + y] = 'a';
        obj10['a' + y] = 'a';
    }

}