document.querySelector("#searchbtn").addEventListener("click", function () {
  var city = document.querySelector("#searchinput").value;
  var forecastContainer = document.getElementById("forecast-container");
  var savedLocations = [];

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=856d91b9f228e56edd3da6504c19f051`
  )
    .then(function (response) {
      document.querySelector("#city").textContent = response.city;
      console.log(response.city);
      savedLocations.splice(savedLocations.indexOf(city), []);
      localStorage.setItem("city", JSON.stringify(city));
      savedLocations = JSON.parse(localStorage.getItem(city));
      return response.json();
    })
    // .then(function(response){
    //   return localStorage.setItem("city", JSON.stringify(city));
    // }
    .then(function (data) {
      console.log(data);
      // const iconName = data.weather[0].icon;
      document.querySelector("#temp").textContent = data.main.temp;
      document.querySelector("#humid").textContent = data.main.humidity;
      document.querySelector("#wind").textContent = data.wind.speed;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&weather?q&&appid=856d91b9f228e56edd3da6504c19f051`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data2) {
          console.log(data2);
          console.log(data2.current.uvi);
          document.querySelector("#uvi").textContent = data2.current.uvi;
          for (var i = 0; i < data2.daily.length; i++) {
            const card = `<div class="card">
            <div class="card-body" style="width: 18rem">
              <h5 class="card-title">Card title 1</h5>
              <p class="card-text">Temperature: <span id="day1z">${data2.daily[i].temp.day}</span></p>
              <img src="http://openweathermap.org/img/wn/${data2.daily[i].weather[0].icon}@2x.png">
              <p class="card-text">
              <p class="card-text">Humidity: <span id="day1z">${data2.daily[i].humidity}</span></p>
              <p class="card-text">Wind Speed: <span id="day1z">${data2.daily[i].wind_speed}</span></p>
              <p class="card-text">UV Index: <span id="day1z">${data2.daily[i].uvi}</span></p>
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>`;
            forecastContainer.innerHTML += card;
          }

          // console.log(data2.daily[1].temp.day);
          // console.log(data2.daily[1].weather[0].icon);
          // document.querySelector("#uv").textContent = data2.current.uvi;
          // document.querySelector("#day1z").textContent =
          //   data2.daily[1].temp.day;
          // ("<h3><strong>Icon</strong>: <img src='http://openweathermap.org/img/wn/10d@2x.png>' + data.weather[0].description + </h3>");
          // document.querySelector("#day2z").textContent =
          //   data2.daily[2].temp.day;
          // document.querySelector("#day3z").textContent =
          //   data2.daily[3].temp.day;
          // data2.daily[1].temp.day;
        });
    });
});
