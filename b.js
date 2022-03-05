//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload= function(){
  var data = JSON.parse(request.response);
   let pop = data.filter((e)=>e.population<200000);
  console.log(pop);
};
