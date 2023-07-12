const apiKey = "8f64d20bf029999aaae622dec4a88818";
const cityName = document.getElementById("text-input");
const weatherData = document.getElementById("weatherData");

document.querySelector("form").addEventListener("submit", (event) => {
  const cityValue = cityName.value;
  event.preventDefault();
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("404 error");
    }
    const data = await response.json();
    console.log(data);
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
  } catch (error) {}
}
