//c.Print the following details name, capital, flag using forEach function

const request=new XMLHttpRequest()

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

request.send()

  request.onload=function()
{
    if(request.status==200)
    {
        let c2=JSON.parse( request.response)
      
        c2.forEach((count)=>
             console.log(count.name,count.capital,count.flag))
    }
else{
request.onerror=function(){
    console.log("error")
}
}}