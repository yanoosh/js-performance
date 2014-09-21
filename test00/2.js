"use strict";

var interval,
    context = {
        count: 0
    };

var callback = function () {
    context.count++;
};

setTimeout(function () {
    clearInterval(interval);
    console.log(context);
    process.exit(0);
}, 5000);

interval = setInterval(callback);