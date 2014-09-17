"use strict";

var x = 3000000000;
//      #___---___---

var obj = {exist: 1, "exist..": 2}

while(x--) {
    if (obj['notexist..']) {}
}