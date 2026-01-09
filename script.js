const apiKey = "YOUR_API_KEY";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then(data => {
      // Show the weather card
      const card = document.getElementById("weatherCard");
      card.style.display = "block";

      // Populate weather info
      document.getElementById("cityName").innerText =
        `${data.name}, ${data.sys.country}`;
      document.getElementById("temperature").innerText =
        `${Math.round(data.main.temp)}°C`;
      document.getElementById("condition").innerText = data.weather[0].main;
      document.getElementById("humidity").innerText =
        `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").innerText =
        `Wind: ${data.wind.speed} m/s`;
      document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(err => {
      alert("City not found. Check spelling and try again.");
    });
}

// Optional: trigger search on Enter key
document.getElementById("cityInput").addEventListener("keyup", function(e) {
  if (e.key === "Enter") getWeather();
});


