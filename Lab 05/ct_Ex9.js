function problem_09() {
/* this statement defines an object reference to the

html element that its ID is "output".

Every time you want to output something, use outputObj */
var outputObj=document.getElementById("output");

// this statement receives some data and parses it to integer
var a = parseInt(prompt("Please enter a number: ", "number"));

// translate rest of your flowcharts to js here:
//variable to store digits seprated by comma ,2
var digits="";
var number=a;

//checking number
if(number <=0){ //if number is less than zero
digits="Enter number greater than 0";
}

else{

while(number>0){
var d=number%10;//finding digit

digits+=d+",";//appending digits

number=Math.floor(number/10);//dividing a by 10
}
}

/* this statement add some message to our output Object
you would need to change the message to be appropriate in Ex10 to E15*/

outputObj.innerHTML="number: "+a+"<br><br>its digits: "+digits;

//the following statements inform the user that the program ended
//and disable the button
outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}