assert = chai.assert;

describe('Testing function counter() of Task 6', function () {

    it('Test 1: counter() returns 1 after 19 calls', function () {
        for (var k = 1; k <= 19; k++) counter();
        assert.equal(counter(), 1);
    });

    /* TODO 1: write a test case to verify the counter returns 0 after 20 calls*/



    /* TODO 2: write a test case to verify the counter returns BOOM! after 21 calls*/



    /* TODO 3: write a test case to verify the counter returns BOOM! for the follow up calls*/



});

