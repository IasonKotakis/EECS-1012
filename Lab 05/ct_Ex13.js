function factorial() {
/* this statement defines an object reference to the
html element that its ID is "output".
Every time you want to output something, use outputObj */
var outputObj=document.getElementById("output");

// this statement receives some data and parses it to integer
var a = parseInt(prompt("Please enter a number: ", ""));

//variable to store initail number
var number=a;

//variable to store factorial
var fact=1;

//using for loop
for(var i=2;i<=number;i++){

fact=fact*i;//mltiply fact by i
}

/* this statement add some message to our output Object
you would need to change the message to be appropriate in Ex10 to E15*/

outputObj.innerHTML="number: "+a+"<br><br>"+a+"!="+fact;

// translate rest of your flowcharts to js here:
//the following statements inform the user that the program ended
//and disable the button

outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

