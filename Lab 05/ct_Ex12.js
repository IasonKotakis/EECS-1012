function problem_12(){
    /* this statement defines an object reference to the
    html element that its ID is "output".
    Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");

    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var temp = a;

    /* this statement add some message to our output Object
    you would need to change the message to be appropriate in Ex10 to E15*/
    // variable changed to reverse
    var reverse = 0;
    while (a > 0)
    {
    var lastDigit = parseInt(a % 10);
    a = parseInt(a / 10);
    //add the digits to reverse*10 and then to reverse
    reverse = reverse * 10 + lastDigit
    }

    outputObj.innerHTML = "number: " + temp + "<br><br>equal to its reverse? ";
   
    var str;
    if(reverse == temp)
    {str = "yes";}
       else
       {str = "no";}
    outputObj.innerHTML = outputObj.innerHTML + str+ "<br><br>" + "program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
    }