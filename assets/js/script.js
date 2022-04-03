// Query Selector Variables
var currentDate = moment();
var searchInput = document.querySelector(".user-input");
var inputValue = $("#user-input");
var searchBtn = document.querySelector(".search-button");
var recentContainer = $("#recent");
var cityDate = document.querySelector(".city-date-icon");
var weather = document.querySelector(".current-weather");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var uv = document.querySelector(".uv-index");
var recentSearches = JSON.parse(localStorage.getItem("recent") || "[]");

// Pulls up recent searches
function renderRecents() {
    recentContainer.empty();
  
    for (let i = 0; i < recentSearches.length; i++) {
      var recentInput = $("<input>");
      recentInput.attr("type", "text");
      recentInput.attr("readonly", true);
      recentInput.attr("class", "form-control-lg text-black");
      recentInput.attr("value", recentSearches[i]);
      recentInput.on("click", function() {
        getWeather($(this).attr("value"));
      });
      recentContainer.append(recentInput);
    }
  }

  renderRecents();

//   Allows for the handling of the search button, including fetching weather info
  var searchSubmit = function (event) {
    event.preventDefault;
  
    var city = searchInput.value.trim();
  
    if (city) {
      getCityWeather(city);
  
      searchInput.value = "";
    } else if (userInput == "") {
      alert("Enter city name.");
    }
  };
  