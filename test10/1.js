"use strict";

var tester = require('../tester');

tester.scenario = function (context) {
    return function () {
        var _ = context;
        if (false) {
            var _this = this, i, length, combo, module;

            if (1 == arguments.length && deps) {
                module = this._modules[deps];
            } else if (deps instanceof Array && 0 == deps.length) {
                callback({});
            } else {
                length = deps.length;
                combo = new Combo(function() {
                    var args = [];

                    for(i = 0; i < length; i++) {
                        args.push(_this._modules[deps[i]]);
                    }
                    callback.apply({}, args);
                });
                for(i = 0; i < length; i++) {
                    if (null == this._modules[deps[i]]) {
                        _this._loadNotInitializedModule(deps[i], combo.add());
                    }
                }
                combo.ready();
            }

            return module;
        }
    }
};