"use strict";

var context = {
        count: 0
    };

var start = new Date;

while (5000  > (new Date) - start) {
    context.count++;
}

console.log(context);
