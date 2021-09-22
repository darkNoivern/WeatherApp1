// fetch("http://api.openweathermap.org/data/2.5/weather?q=Durgapur&units=metric&appid=32c612a4c1c744a7775b1473bd4ecc31"
// ).then((response) => response.json())
// .then((data) => console.log(data));

document.querySelector(".search-button").addEventListener("click",function(){
    var cityname = document.querySelector(".search-bar").value;
    cityname = cityname.charAt(0).toUpperCase() + cityname.slice(1);
    // console.log(cityname);
    document.querySelector(".search-bar").value = cityname;
    weather.fetchDataSet(cityname);
    document.querySelector(".search-bar").value = "";
});

var weather = {
    // apiKey = "32c612a4c1c744a7775b1473bd4ecc31",
    fetchDataSet: function(city){
        // fetch("http://api.openweathermap.org/data/2.5/weather?q="
        // + city
        // + "&units=metric&appid=32c612a4c1c744a7775b1473bd4ecc31"
        // + this.apiKey
        var link = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=32c612a4c1c744a7775b1473bd4ecc31"
        fetch(link).then((response) => response.json()).then((data) => this.displayDataSet(data));
    },
    displayDataSet: function(data){
        var {name} = data;
        var {icon,main} = data.weather[0];
        var {temp,humidity} = data.main;
        var {speed} = data.wind;
        // console.log(name,icon,main,temp,humidity,speed);

        document.querySelector(".city").textContent = "Weather in " + name;
        // document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").textContent = temp + " °C";
        document.querySelector(".description").textContent = main;
        document.querySelector(".humidity").textContent = "Humidity : " + humidity + " %";
        document.querySelector(".windsp").textContent = "Wind Speed : " + speed + "km/hr";
    },
}

document.querySelector(".temp").addEventListener("click",function(){
    var temperature = document.querySelector(".temp").textContent;
    var degtype = temperature.slice(temperature.length-2);
    // console.log(degtype);
    if(degtype==="°C"){
        var newTemp = (Number(temperature.slice(0,temperature.length-3))*9)/5+32;
        // console.log(newTemp);
        document.querySelector(".temp").textContent = newTemp.toFixed(2) + " °F";
    }
    else{
        var newTemp = ((Number(temperature.slice(0,temperature.length-3))-32)*5)/9;
        document.querySelector(".temp").textContent = newTemp.toFixed(2) + " °C";
    }
});

weather.fetchDataSet("Durgapur");