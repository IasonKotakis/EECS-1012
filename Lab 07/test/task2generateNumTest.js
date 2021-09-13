assert = chai.assert;

describe('Testing function generateNum(upTo) of Task 2', function () {

    it('Test 1: boundary value 1 for upTo', () => {
        assert.equal(generateNum(1), 1);
    });

    it('Test 2: generateNum(5) returns >= 1', () => {
        for (var i = 1; i <= 1000; i++) {
            assert(generateNum(5)>=1);
        }
    });

    it('Test 3: generateNum(5) returns <= 5', () => {
        for (var i = 1; i <= 1000; i++) {
            assert(generateNum(5)<=5);
        }
    });


});