assert = chai.assert;

describe('Testing function mySum(upTo) of Task 3', function () {

    it('Test 1: the returned value is from type number', function () {
        assert.isNumber(mySum(3)); // this is the same as assert.typeOf(mySum(3), 'number');
    });

    it(' Test 2: calculates sum of 1 to 3 as 6', () => {
        assert.equal(mySum(3), 6); // this is the same as assert(mySum(3) == 6);
    });
});
