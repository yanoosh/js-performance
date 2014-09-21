"use strict";

var context = {
        count: 0
    };

var test = function (context) {
    context.count++
};


var i;
var start = new Date;
while (5000 > (new Date) - start) {
    i = 10000;
    while (i--) {
        test(context);
    }
}

console.log(context);
