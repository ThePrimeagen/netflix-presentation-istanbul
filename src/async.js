var Rx = require('rx');
var Observable = Rx.Observable;

/**
 * Toggles until complete.
 * @param {Function} predicate
 * @param thisArg
 * @returns {Rx.AnonymousObservable}
 */

// NOTE: This is really just a where|filter
Observable.prototype.toggle = function(predicate, thisArg) {
    var parent = this;
    return new Rx.AnonymousObservable(function(observer) {
        var count = 0;
        parent.subscribe(function(result) {
            try {
                if (predicate.call(thisArg, result, count++)) {
                    observer.onNext(result);
                }
            } catch(e) {
                // Ohh no?
                observer.onError(e);
            }
        }, observer.onError.bind(observer), observer.onCompleted.bind(observer));
    });
};
