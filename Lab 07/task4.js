// JavaScript code for Task 4
// Learning Objective: designing and use of a sub-algorithm that simulates a die

function myFunction() {
  var p = document.getElementById("mydata");
  /*TODO 1: call a sub-algorithm to return a random natural number between 1 
    and 6 inclusively; save the result in a variable */

  /*TODO 2: call a sub-algorithm to return a random natural number between 1 
    and 6 inclusively; save the result in another variable */

  /*TODO 3: change the content of paragraph p such that is show s the results of two dices as 
    shown in the figure in Lab07 specification */

  /*TODO 4: if the values of 2 dice are the same, alert DOUBLES! */

}

// a sub-algorithm to return a natural number between 1 and 6 inclusively
// pre-conditions: none
// post-conditions: returns a random natural number in [1,6]
function rollDie() {
  var num = Math.floor(Math.random() * 6);
  num = num + 1;
  return num;
}
