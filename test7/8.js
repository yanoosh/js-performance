"use strict";

var tester = new (require('../tester'));

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
        obj1['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj2['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj3['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj4['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj5['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj6['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj7['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj8['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj9['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
        obj10['abcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyzabcdefghijklmnoprstuwxyz.' + y] = 'a';
    }

}