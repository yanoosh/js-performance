"use strict";

var x = 20000;
//      #___---___---
var prefix =
    ".23456789 123456" + // dot
    "123456789 123456" +
    "123456789 123456" +
    "123456789 123456"; // 64

while (x--) {

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
        obj1[prefix + y] = 'a';
        obj2[prefix + y] = 'a';
        obj3[prefix + y] = 'a';
        obj4[prefix + y] = 'a';
        obj5[prefix + y] = 'a';
        obj6[prefix + y] = 'a';
        obj7[prefix + y] = 'a';
        obj8[prefix + y] = 'a';
        obj9[prefix + y] = 'a';
        obj10[prefix + y] = 'a';
    }

}