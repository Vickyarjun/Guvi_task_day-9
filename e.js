//e.Print the country which uses US Dollars as currency.

const request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload=function()
{
    if(request.status==200)
    {
        let data=JSON.parse( request.response)
        data.filter((e)=> e.currencies)
        .filter((e)=> e.currencies.USD)
        .map((e)=>{    
        console.log(e.name.official)
          
         })
    
    }
else{
request.onerror=function(){
    console.log("error")
}
}}
