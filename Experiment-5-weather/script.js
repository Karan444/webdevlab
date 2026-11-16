function getWeather() {

    var city = document.getElementById("city").value;

    if (city == "") {
        alert("Please enter city name");
        return;
    }

    var result = document.getElementById("result");

    result.innerHTML = "Loading...";

    // Get city coordinates
    fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city + "&count=1&format=json")
    .then(response => response.json())
    .then(data => {

        if (!data.results) {
            result.innerHTML = "City not found";
            return;
        }

        var latitude = data.results[0].latitude;
        var longitude = data.results[0].longitude;
        var cityName = data.results[0].name;

        // Get weather information
        fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m,relative_humidity_2m,wind_speed_10m")
        .then(response => response.json())
        .then(weather => {

            result.innerHTML =
                "<h4>" + cityName + "</h4>" +
                "<p>Temperature: " + weather.current.temperature_2m + " °C</p>" +
                "<p>Humidity: " + weather.current.relative_humidity_2m + " %</p>" +
                "<p>Wind Speed: " + weather.current.wind_speed_10m + " km/h</p>";

        });

    })
    .catch(error => {
        result.innerHTML = "Unable to get weather information";
    });

}