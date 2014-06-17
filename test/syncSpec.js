var expect = require('chai').expect;
var Sync = require('../src/sync');

describe('Sync Spec', function() {
    describe('#foo', function() {
        it('should test bar above 5 multipled by 2 and squared', function () {
            expect(Sync.foo(6)).to.equal(6 * 6 * 2);
        });
        it('should test bar at 5 <= bar > 0', function () {
            expect(Sync.foo(5)).to.equal(25);
            expect(Sync.foo(4)).to.equal(16);
            expect(Sync.foo(1)).to.equal(1);
        });
        it('0 and below', function () {
            expect(Sync.foo(0)).to.equal(0);
            expect(Sync.foo(-1)).to.equal(-2);
        });
    });
    describe('#baz', function() {
        it('should test foo', function() {
            expect(Sync.baz('foo')).to.equal(1);
        });
        it('should test buz', function() {
            expect(Sync.baz('buz')).to.equal(2);
        });
    });
});

