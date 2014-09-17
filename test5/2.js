"use strict";

var x = 3000000000;
//      #___---___---

var a, b, c;

var s0 = 's0';
a = function() {
    var s1 = 's1';
    b = function () {
        var s2 = 's2';
        c = function () {
            var _ = s1;
        }
    }
};
a(); b();

while(x--) {
    c();
}