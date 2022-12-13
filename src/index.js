function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ⏰${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
//week5
function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#degree").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#describtion").innerHTML =
    response.data.weather[0].main;
}

function changeCity(event) {
  event.preventDefault();
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", changeCity);

function celsiusTemp() {
  let celDegree = document.querySelector("#degree");
  celDegree.innerHTML = 20;
}
let tempInCel = document.querySelector("#celsius");
tempInCel.addEventListener("click", celsiusTemp);
