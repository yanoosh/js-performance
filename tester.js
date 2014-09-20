var tester = {
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
}

process.on('exit', function () {
    tester.run();
})

module.exports = tester;