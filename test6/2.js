"use strict";

var x = 3000000000;
//      #___---___---

var obj = {exist: 1}

while(x--) {
    if (obj.notexist) {}
}