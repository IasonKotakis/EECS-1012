assert = chai.assert;

describe('Testing function getDateInCustomizedFormat() of Task 5', function () {

    it('Test 1: getDateInCustomizedFormat() returns something', function () {
        assert.exists(getDateInCustomizedFormat(), 'the return value is not null or undefined');
    });

    it('Test 2: the returned value is from type string', () => {
        assert.typeOf(getDateInCustomizedFormat(), 'string');
    });

    it("Test 3: the returned value's length is 38 or 39 characters", () => {
        assert(getDateInCustomizedFormat().length == 38 || getDateInCustomizedFormat().length == 39);
    });

    it("Test 4: the returned value is It's HOUR:MIN. Today is DAYOFWEEK (MONTH DAY, YEAR).", () => {
        /* TODO 1: replace the following message to reflect the exact current time and date, 
        and run the test immediately */
        assert(getDateInCustomizedFormat() == "It's 20:22. Today is Tue (Mar 3, 2020).");
    });

});