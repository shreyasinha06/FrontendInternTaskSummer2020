function ValidateEmail(inputText,inputText2,inputText3,inputText4)
{
	var c=0,text;
	var x1=inputText2.value.length;
	var x =parseInt(inputText2.value);
	var y1=inputText3.value;
  var y2=inputText4.value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat) && y1==y2)
{
  c=c+1;
}

else
{
alert('validation failed,try again');

return false;
  }
  
  if(c!=0)
  {
  	if (isNaN(x) || x1!=10)
  	 {
  	 	
     alert('validation failed,try again');
    return false;
     } 
    else 
    {
    window.location= "thnx.html";
  }

  }
 
}
