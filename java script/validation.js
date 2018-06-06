function validation()
{
	var result=true;
	var i = document.getElementsByTagName("input");
	if(i[0].value.length==0)
	{
		result=false;
	}
	if(i[1].value.length!=10)
	{
		result=false;	
	}
	
	var e = document.getElementById("e1").value;
	var ai=e.indexOf('@');
	var di=e.lastIndexOf('.');
	
	if(ai<1 || di>=e.length-2 || di-ai<3)
		result=false;
		
	

	return(result);
}