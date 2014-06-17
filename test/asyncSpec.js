var expect = require('chai').expect;
var Async = require('../src/async');
var Rx = require('rx');
var Observable = Rx.Observable;

describe('Async', function() {
    this.timeout(2000);
    it('should toggle on the predicate.', function(done) {
        Observable.
            interval(20).
            take(20).
            toggle(function(results, count) {
                return count % 2 === 1;
            }).
            scan(0, function(prev, current) {
                return prev + 1;
            }).
            finalValue().
            subscribe(function(sum) {
                expect(sum).to.equal(10);
            }, done, done);
    });

    it('should provide the error of predicate.', function(done) {
        Observable.
            interval(20).
            take(20).
            toggle(function(results, count) {
                throw 'ohh no!';
            }).
            subscribe(function(sum) {
                done('Should never get here.');
            }, function(err) {
                expect(err.indexOf('ohh no!')).to.equal(0);
                done();
            }, done);
    })
});
