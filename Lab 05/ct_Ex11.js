function problem_11() {
    /* this statement defines an object reference to the
    html element that its ID is "output".
    Every time you want to output something, use outputObj */
    var outputObj=document.getElementById("output");
    
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var originalNum=a;
    
    /* this statement add some message to our output Object
    you would need to change the message to be appropriate in Ex10 to E15*/
    var sum = 0;

    while (a > 0) {
        var lastDigit = parseInt(a % 10);
        a = parseInt(a / 10); 
        sum= sum + lastDigit
    }

    outputObj.innerHTML = "number: " + originalNum + "<br><br>Sum of Digits: ";
    //the following statements inform the user that the program ended
    //and disable the button
    // print sum
    outputObj.innerHTML = outputObj.innerHTML + sum + "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}