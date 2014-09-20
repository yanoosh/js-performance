"use strict";
// date >> pref-result; cat perf.js >> pref-result; time -v --append -o pref-result node perf.js; tail -n 24 pref-result
var x = 3000000000;
//      #___---___---
var value1 = false;
var value2 = true;
var result;

//while(x--) {
//    if (value1 || value2) {
//        result = true;`
//    }
//}


//while(x--) {
//    var description = value1 || value2;
//    if (description) {
//        result = true;
//    }
//}


//var description = function () {
//    result = value1 || value2;
//}
//
//while(x--) {
//    if (description()) {
//        result = true;
//    }
//}


var description = function (a, b) {
    return a || b;
}

while(x--) {
    if (description(value1, value2)) {
        result = true;
    }
}
