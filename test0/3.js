"use strict";

var context = {
        count: 0
    };

var i = 2154210000;

while (i--) {
    context.count++;
}

console.log(context);
