const apiKey = "9c40b7b4fe68bbf8e50b8bc712010a8a";
const cityName = document.getElementById("text-input");
const weatherDataElement = document.getElementById("weatherData");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityName.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("404 error");
    }
    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels like : ${Math.round(data.main.feels_like)}`,
      `Humidity : ${data.main.humidity}%`,
      `Wind Speed : ${data.wind.speed} m/s`,
    ];

    weatherDataElement.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" >`;

    weatherDataElement.querySelector(".temperature").textContent = `${temp}°C`;

    weatherDataElement.querySelector(".description").textContent = description;

    weatherDataElement.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataElement.querySelector(".icon").innerHTML = "";

    weatherDataElement.querySelector(".temperature").textContent = "";

    weatherDataElement.querySelector(".description").textContent =
      "Enter a Valid City Name";

    weatherDataElement.querySelector(".details").innerHTML = "";
  }
}
