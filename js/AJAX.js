function GetXmlHttpObject()
{
    var xmlHttp=null;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

function ChangeContent(str)
{

    xmlHttp=GetXmlHttpObject()

        if (xmlHttp==null)
        {
            alert ("We need AJAX to run!");
            return;
        }

    var url;
    url=str+".html";
    xmlHttp.onreadystatechange=stateChanged;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);

    if (str == "powered_by"){
        document.getElementById("content").style.width="100%";
    }
    else{
        document.getElementById("content").style.width="80%";
    }
}

function stateChanged() 
{ 
    if (xmlHttp.readyState==4)
    { 
        if (xmlHttp.status==200){
            document.getElementById("content").innerHTML=xmlHttp.responseText;
        }
    }
    else{
        document.getElementById("content").innerHTML="<div style='text-align: center;'><img src='ajax-loader.gif' alt='' /></div>";
    }
}
