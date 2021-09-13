function fibonacci() {
    /* this statement defines an object reference to the
    html element that its ID is "output".
    Every time you want to output something, use outputObj */
    var outputObj = document.getElementById("output");
   
    var a = parseInt(prompt("Please enter a number: ", ""));
    
    outputObj.innerHTML = "number: " + a + "<br><br>"; 


    var i,j;
    for(i=1; i<=a; i++) 
    {
      for(j=1; j<=i; j++)
      {
        outputObj.innerHTML = outputObj.innerHTML + "xx" +" ";
      }
     outputObj.innerHTML = outputObj.innerHTML + "<br>"; 
    }

    outputObj.innerHTML = outputObj.innerHTML + " " + "<br>program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}