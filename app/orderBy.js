System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var OrderBy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OrderBy = (function () {
                function OrderBy() {
                }
                OrderBy._orderByComparator = function (a, b) {
                    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
                        if (a.toLowerCase() < b.toLowerCase())
                            return -1;
                        if (a.toLowerCase() > b.toLowerCase())
                            return 1;
                    }
                    else {
                        if (parseFloat(a) < parseFloat(b))
                            return -1;
                        if (parseFloat(a) > parseFloat(b))
                            return 1;
                    }
                    return 0;
                };
                OrderBy.prototype.transform = function (input, _a) {
                    var _b = _a[0], config = _b === void 0 ? '+' : _b;
                    if (!Array.isArray(input))
                        return input;
                    if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
                        var propertyToCheck = !Array.isArray(config) ? config : config[0];
                        var desc = propertyToCheck.substr(0, 1) == '-';
                        if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                            return !desc ? input.sort() : input.sort().reverse();
                        }
                        else {
                            var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                                ? propertyToCheck.substr(1)
                                : propertyToCheck;
                            return input.sort(function (a, b) {
                                return !desc
                                    ? OrderBy._orderByComparator(a[property], b[property])
                                    : -OrderBy._orderByComparator(a[property], b[property]);
                            });
                        }
                    }
                    else {
                        return input.sort(function (a, b) {
                            for (var i = 0; i < config.length; i++) {
                                var desc = config[i].substr(0, 1) == '-';
                                var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                                    ? config[i].substr(1)
                                    : config[i];
                                var comparison = !desc
                                    ? OrderBy._orderByComparator(a[property], b[property])
                                    : -OrderBy._orderByComparator(a[property], b[property]);
                                if (comparison != 0)
                                    return comparison;
                            }
                            return 0;
                        });
                    }
                };
                OrderBy = __decorate([
                    core_1.Pipe({ name: 'orderBy', pure: false }), 
                    __metadata('design:paramtypes', [])
                ], OrderBy);
                return OrderBy;
            }());
            exports_1("OrderBy", OrderBy);
        }
    }
});
