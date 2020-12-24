fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=856d91b9f228e56edd3da6504c19f051"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector("#temp").textContent = data.main.temp;
  });
