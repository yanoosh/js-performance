"use strict";

var context = {
        count: 0
    };

while (5 > process.uptime()) {
    context.count++;
}

console.log(context);
