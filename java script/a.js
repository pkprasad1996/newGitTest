//document.write("this is js external file");


function table()
{

var x=prompt("Enter any number","5");
//document.write(x);
if(x!=null)
{
	
	for(i=1;i<=10;i++)
	{
		document.write(" "+x+" * "+i+"= "+x*i+"<br/>");
	}
	
}
else{
	
	document.write("value is NULL");
}
 
 
}