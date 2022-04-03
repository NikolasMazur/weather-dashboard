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

