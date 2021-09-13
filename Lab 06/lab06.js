//pre: num is an integer which greater than 2
//post: num is prime or not is outputted
function p_1(){
    var num=parseInt(prompt("Please enter a number", ""));
    var prime=true;
    var d=2;
    while (prime=true&&d<=num/2) {
        if (num%d==0) {
            prime=false;
        }
        d=d+1;
    }
    if (prime=true) {
        alert(num+" is prime");
    }
    else {
        alert(num+" is not prime");
    }
}

//pre: num is positive integer
//post: if the sum of first 4 numbers and the sume of second four numbers are equal or not
function p_2(){
    var sum1=0;
    var sum2=0;
    for ( i=1; i<=4; i++) {
    var num=parseInt(prompt("Please enter a number", ""));
    sum1=sum1+num;
    }
    alert(sum1);
    for ( i=1; i<=4; i++) {
        num=parseInt(prompt("Please enter a number", ""));
        sum2=sum2+num;
    }
    alert(sum2);
    if (sum1==sum2) {
        alert("yes");
    }
    else {
        alert("no");
    }
}

//pre: num is integer
//post: keep receiving numbers until 0 is entered, 
//       the number of positive numbers and negative numbers are counted.
function p_3(){
    var p=0;
    var n=0;
 var num=parseInt(prompt("Please enter a number", ""));
 if (num>0) {
     p=p+1;
 }
 else {
     if (num<0){
     n=n+1;
     }
 }
 while (num!=0 && p<=2*n) {
    num=parseInt(prompt("Please enter a number", ""));
    if (num>0) {
        p=p+1;
    }
    else {
        if (num<0){
            n=n+1;
            }
 }
 alert("postive numbers: "+p+" negative numbers: "+n);
}
}

//pre: num is an integer
//post: if the number of negative number of the first 4 numbers is equal to to number of 
//        positive number of the second 4 numbers, result "yes" or "no" is outputted.
function p_4(){
 var cnt1=0;
 var cnt2=0;
 for (i=1;i<=4;i++) {
    var num=parseInt(prompt("Please enter a number", ""));
    if (num<0) {
        cnt1=cnt1+1;
    }
 }
 for (i=1;i<=4;i++) {
    var num=parseInt(prompt("Please enter a number", ""));
    if (num>0) {
        cnt2=cnt2+1;
    }
 }
 if (cnt1==cnt2) {
     alert("yes");
 }
 else {
     alert("no");
 }
}

//pre: num is a positive integer
//post: print all the prime numbers between 1 and num
function p_5(){
    var num=parseInt(prompt("Please enter a number", ""));
    for (i=2;i<=num;i++) {
        if (prime(i)==true) {
            alert(i+" is prime!");
        } 
    }
}

//pre: i is a positive integer which greater than 2
//post: test if i is prime or not
function prime(i) {
    var flag=true;
    var d=2;
    while (flag==true && d<=i/2) {
        if (i%d==0) {
            flag=false;
        }
        d=d+1;
    }
    return flag;
}

//pre: num is a positive integer
//post: print all the prime numbers which has a digit 7 between 1 and num
function p_6(){
    var num=parseInt(prompt("Please enter a number", ""));
    for (i=2;i<=num;i++) {
        if (prime(i)==true && has7(i)==true) {
            alert(i+" is prime and has a digit 7!");
        } 
    }
}

//pre: i is a positive integer which greater than 2
//post: test if i has a digit of 7 or not
function has7(i) {
    var flag=true;
    var b = 0;
    var cnt = 0;
    while ( i > 0 ) {
           b = i % 10;
           if (b==7) {
               cnt=cnt+1;
           } 
           i = (i-b)/10;    
    }
    if (cnt==0) {
        flag=false;
    }
    return flag;
}