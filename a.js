//Solving problems using array functions on rest countries data.
//a.Get all the countries from Asia continent /region using Filter function


var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload= function(){
  var data = JSON.parse(request.response);

  let result = data.filter((e)=>e.region==="Asia");
  console.log(result);
};
