assert = chai.assert;

describe('Testing function rollDie() of Task 4', function () {
    /* TODO 1: write a unit test to verify if rollDie() returns a value that 
       is not null or undefined.
       Hint: see how this has been done  in task1generateNumTest.js */
    



    /* TODO 2: write a unit test to verify if rollDie() returns a value that 
       is from type number.
       Hint: see how this has been done in task1generateNumTest.js */
    
       



    /* TODO 3: write a unit test to verify if rollDie() returns a value that 
       is greater than or equal 1.
       Hint: see how this has been done Test 4 */
    



    it('Test 4: the returned value is <= 6', () => {
        for (var i = 1; i <= 1000; i++) {
            assert(rollDie() <= 6);
        }
    });

    it('Test 5: the returned value is a **natural** number between 1 and 6', () => {
        var result;
        for (var i = 1; i <= 1000; i++) {
            result = rollDie();
            assert(result == 1 || result == 2 || result == 3 || result == 4 || result == 5 || result == 6);
        }
    });

})
