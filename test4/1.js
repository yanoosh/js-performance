"use strict";

var x = 5000000000;
//      #___---___---

var value = 0;
var f = function () {
    value = 123;
};

while(x--) {
    f()
}