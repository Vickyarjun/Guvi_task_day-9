//d.Print the total population of countries using reduce function


var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload= function(){
  var data = JSON.parse(request.response);
let pop = data.reduce((total,country)=>total+country.population,0);
console.log(pop);
  
};