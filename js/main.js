function checknumber(){
    var num=
        document.getElementById("num").value;
    var message;
    if(num %2==0){
        message="number:"+num+"is even";
    }
    else{
        message="number:"+num+"is odd";
    }
    document.getElementById("res").innerHTML=message;
}
function billcalc(){ 
    var units=document.getElementById("units").value;
                    var min_amount=0;
                    var totalamount=0;
                    var amount=0;
    
if(units >=0 && units <100)
    {
      amount=units*5;  
    }
else if(units >=100 && units <500){
    amount=units*6;
    
}
else
    {
        amount=units*10;
    }
totalamount=min_amount+amount;
message="total amount is:"+totalamount;
  document.getElementById("bill").innerHTML=message;
                   }