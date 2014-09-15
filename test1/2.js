"use strict";

var x = 20000000;
//      #___---___---
var value = [];

while(x--) {
    value[x] = function () {
        this.release();
    };
    value[x] = null;
}