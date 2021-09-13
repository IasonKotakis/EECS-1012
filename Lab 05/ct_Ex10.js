function problem_10() {

    /* this statement defines an object reference to the
      
    html element that its ID is "output".

    Every time you want to output something, use outputObj */

    var outputObj=document.getElementById("output");
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", "number"));
    // translate rest of your flowcharts to js here:
    var number=a;
    // variable to store 7's count
    var count = 0;
    //checking number
    if(number <= 0){ //if number is less than zero
        a = "Enter number greater than 0";
    }

    else{

        while(number>0) //using while loop
        {
            var d=number%10;//finding digit

            if(d === 7) // check if the digit is equal to 7
                count++;

            number=Math.floor(number/10);//dividing a by 10
        }
    }

    /* this statement add some message to our output Object
    you would need to change the message to be appropriate in Ex10 to E15*/
    outputObj.innerHTML="number: "+a+"<br><br>number of 7's: "+count;
    //the following statements inform the user that the program ended
    //and disable the button
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}