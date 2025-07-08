function getweather() {
    const city = document.getElementById("city").value.trim();
    const weatherresult = document.getElementById("weatherresult")

    if (!city) {
        weatherresult.textContent = "Enter city name."
        return;
    }
    const cityName = city.toLowercase();
    if (cityName.toLowercase() === "Karachi") {
        weatherresult.textContent = "Karachi weather: 34°C, Sunny"
    }else if (cityName.toLowercase() === "Lahore"){
        weatherresult.textContent = "Lahore weather: 36°C, Hot"
    }else if (cityName.toLowercase() === "Islamabad"){
        weatherresult.textContent = "Islamabad weather: 28°C, Cloudy"
    }else {
        weatherresult.textContent = "Weather data not available (Try: Karachi, Lahore, Islamabad)"
    }
}