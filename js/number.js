function checkPrime(){
    num=getUserInput();
    flag=true;
    if(num<2){
        flag = false;
    }
    for(var i=2; i<=Math.sqrt(num); i++)
    {
        if(num %i == 0)
            {
                flag=false;
                break;
            }
    }


    if(flag)
        {
            showresult("number is:"+num+" Prime");
        }
    else{
        showresult("number is:"+num+" not Prime");
    }
  
    
}
function factorial(){
    num=getUserInput();
    var res=1;
    for(i=2;i<=num;i++)
        {
            res *=i;
        }
    showresult("factorial of:"+num+" is:"+res);
    
}
function factors(){
    num=getUserInput();
    var output=" ";
    for(var i=1;i<=num;i++){
        if(num % i==0){
            output +=i+ " ";
        }
    }
     showresult("factors of number is:"+num+" is:"+output);
}
function fibonacci(){
    var num=getUserInput();
    var output="";
    if(num==1)
        {
            output +="0";
        }
    else if(num==2)
        {
            output +="0 1";
        }
    else{
        var a=0; b=1;
        output +="0 1";
        for(var i=3;i<=num;i++){
            c=a+b;
            output += " "+c;
            a=b;
            b=c;
        }
    }
     showresult("fabonacci series :"+num+" is:"+output);
}
function reverse(){
var num=getUserInput();
 var rev ="";

 while (num != 0) {
     var r=num%10;
rev=rev*10+r;
    num=parseInt(num/10);
 }
  
    
      showresult("reverse :"+rev);
}

function IsPalindrome(){
    
var num=getUserInput();
    var rev ="";
  var num1=num;
    while(num!=0){
var r=parseInt(num%10);
rev=rev*10+r;
    num=parseInt(num/10);
    }
if(num1==rev)
    {
         showresult("Palindrome :");
    }
    else{
          
 showresult(" not Palindrome :");
}
}
function sumofdigits(){
num=getUserInput();
    var sum=0;
    while(num!=0){
        sum +=parseInt((num%10));
        num=parseInt(num/10);
    }
    showresult("sumofdigits is:"+sum); 
    
    
}
function sumgetssingledigit(){
   num=getUserInput(); 
    var sum=num;
    while(num>9){
        sum =parseInt((num%10)+(num/10));
        num=sum;
    }
    showresult("sumofdigitssingle is:"+sum); 
}
function getUserInput(){
num=document.getElementById("num").value;
    return num;
}
function showresult(message){
document.getElementById("result").innerHTML="<h4>"+message+"</h4>";
}