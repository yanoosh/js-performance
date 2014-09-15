"use strict";

var timer = {
    count: 0,
    continue: true
};

//process.on('SIGINT', function() {
////    console.log("Counts: %i", timer.count);
//    timer.continue = false;
//    process.exit(0);
//});
process.on('exit', function(code) {
    console.log('About to exit with code:', code);
});

module.exports = timer;