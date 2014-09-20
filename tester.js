var Tester = function () {
    var _this = this;

    if (typeof process != 'undefined') {
        process.on('exit', function () {
            _this.run();
        });
    }
};

Tester.prototype = {
    context: null,
    maxTime: 5000,
    interval: 10000,
    n: 0,
    scenario: null,
    run: function() {
        var i, start = new Date, rate;
        while (this.maxTime > (new Date) - start) {
            i = this.interval;
            while (i--) {
                this.scenario();
                this.n++;
            }
        }

        rate = this.n * (1000 / ((new Date) - start));
        console.log("%d/s / n %d / %dms / %dKB", parseInt(rate), this.n, (new Date) - start, process.memoryUsage().heapTotal / 1024);
    }
};

module.exports = Tester;