// Adds query selectors
var currentDate = moment();
var searchInput = document.querySelector(".user-input");
var searchBtn = document.querySelector(".search-button");
var cityDateIcon = document.querySelector(".city-date-icon");
var weatherIcon = document.querySelector(".current-weather");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var uv = document.querySelector(".uv-index");

var searchSubmitHandler = function (event) {
  event.preventDefault;

  var city = searchInput.value.trim();

  if (city) {
    getCityWeather(city);

    searchInput.value = "";
  } else {
    alert("Please enter a city");
  }
};

searchBtn.addEventListener("click", async function () {
    // Adds API URL/key
    var apiUrl =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      searchInput.value +
      "&units=imperial&appid=9795009f60d5d1c3afe4e6df6002c319";
    // API fetch
    var response = await fetch(apiUrl);
      console.log(response);
        if (response.ok) {
          console.log(response);
          var data = await response.json();
            var nameValue = data.name;
            var tempValue = data.main.temp;
            var humidityValue = data.main.humidity;
            var windValue = data.wind.speed;
            console.log(data);
            var lat = data.coord.lon;
            var lon = data.coord.lat;
            await uvIndex(data.coord.lat, data.coord.lon);
            var icon = data.weather[0].icon;

            var weatherURL =`http://openweathermap.org/img/wn/${icon}.png`;
            var icon = `<img src="${weatherURL}"/>`;
           console.log(weatherIcon);
  
            cityDateIcon.innerHTML = 
              nameValue + currentDate.format(" (M/DD/YYYY) ") + icon;
            temp.innerHTML = "Temperature: " + tempValue + " °F";
            humidity.innerHTML = "Humidity: " + humidityValue + "%";
            wind.innerHTML = "Wind Speed: " + windValue + " MPH";
            console.log(weatherIcon);
              
              console.log(icon);
  
        } else {
          alert("Error: " + response.statusText);
        }
});