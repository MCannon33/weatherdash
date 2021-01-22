document.querySelector("#searchbtn").addEventListener("click", function () {
  var city = document.querySelector("#searchinput").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=856d91b9f228e56edd3da6504c19f051`
  )

  const iconName = data.weather[0].icon
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
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
          console.log(data2.daily[1].temp.day);
          console.log(data2.daily[1].weather[0].icon);
          document.querySelector("#uv").textContent = data2.current.uvi;
          document.querySelector("#day1z").textContent =
            data2.daily[1].temp.day;
            "<h3><strong>Icon</strong>: <img src='http://openweathermap.org/img/wn/10d@2x.png>' + data.weather[0].description + "</h3>"
          document.querySelector("#day2z").textContent =
            data2.daily[2].temp.day;
          document.querySelector("#day3z").textContent =
            data2.daily[3].temp.day;
          data2.daily[1].temp.day;
        });
    });
});
