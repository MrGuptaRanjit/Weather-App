const apiKey = '903b2bd9137993efd1f9a01be40818b3'; 

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById('weatherResult');
      const icon = data.weather[0].icon;
      weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-icon" />
        <p><strong>${data.main.temp}°C</strong></p>
        <p>${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    });
}
