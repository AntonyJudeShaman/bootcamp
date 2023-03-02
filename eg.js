
var req=XMLHttpRequest();
url="https://restcountries.com/v3.1/all"
req.open("GET",url,true);
req.send();

req.onload = function(){
    alert(this.response);
        
}