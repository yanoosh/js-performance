"use strict";

var i = 0,
    context = {
        count: 0
    };

var start = new Date;
while (5000 > (new Date) - start) {
    i = 10000;
    while (i--) {
        context.count++;
    }
}

console.log(context);
