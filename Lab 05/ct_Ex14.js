function fibonacci(){

var displayOutput = document.getElementById("output");

var a = parseInt(prompt("Please enter a number: ", "number"));

var secondLast = 0;
var first = 1;
var newValue;
var result = secondLast+", "+first;

for(i=0;i<a-2;i++){
   newValue = secondLast + first;
   secondLast = first;
   first = newValue;
   result = result +" , "+newValue;
}

output.innerHTML = "number: "+a+"<br><br>";
output.innerHTML = output.innerHTML +"Fibonacci: "+result;
output.innerHTML = output.innerHTML + "<br><br>" + "program ended";
}  
