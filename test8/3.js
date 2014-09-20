"use strict";

var tester = new (require('../tester'));

tester.prefix =
    "123456789 123456"; // 16
tester.interval = 10;
tester.scenario = function () {

    var y = 100;

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
        obj1[this.prefix + y] = 'a';
        obj2[this.prefix + y] = 'a';
        obj3[this.prefix + y] = 'a';
        obj4[this.prefix + y] = 'a';
        obj5[this.prefix + y] = 'a';
        obj6[this.prefix + y] = 'a';
        obj7[this.prefix + y] = 'a';
        obj8[this.prefix + y] = 'a';
        obj9[this.prefix + y] = 'a';
        obj10[this.prefix + y] = 'a';
    }

}