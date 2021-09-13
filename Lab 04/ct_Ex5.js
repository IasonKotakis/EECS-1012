// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function mapping() {
   //precondition: 
   // a,b ,c 
   //Postcondition:
   //	The roots for x1 and x2 are outputted.                              


   /* in Ex1, change the following two lines such that 
      num1 and num2 are parsed to integer before be 
      assigned to w and h, respectively.                   */
   /* in Ex 2, rename w and h to a and b, respectively.    */
   var a = parseInt(document.getElementById("num1").value);
    
      
   /* in Ex5, you should delete from Line 15 to this line */

   switch (true){   
    case (a>89): 
       answer="A+";
       break;
    case (a>80): 
        answer="A";
       break;
    case (a>75):
        answer="B+";
    case (a>70): 
        answer="B";
       break;
    case (a>65): 
        answer="C+";
       break;
    case (a>60): 
        answer="C";
       break;
    case (a>55): 
        answer="D+";
       break;
       case (a>50): 
        answer="D";
    
       break;
    case (a>40): 
        answer="E";
       break;
    default:
       answer="F";
   }
   document.getElementById("output").innerHTML = answer;

   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */

}
