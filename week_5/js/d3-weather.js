
let temperatureDiv = document.getElementById("temperatureDiv")
let weatherDataDiv = document.getElementById("weatherDataDiv")
let currentLocationButton = document.getElementById("currentLocationButton")

currentLocationButton.addEventListener('click', function (){

    if(!navigator.geolocation) {
        console.log('Geolocation not supported')
    } else{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
        }, function (){
            // error
            console.log('Unable to find location...')
        })
    }
})

// make a request to get weather
let apiKey = "te2"
let url = `http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=${apiKey}&units=imperial`


fetch(url).then(response => {
    return response.json()
}).then(result => {
    displayWeather2(result)
})

function displayWeather2(weatherData) {

    let weatherItem = `<div>${weatherData.main.temp}</div>
                        <div>${weatherData.weather[0].description}</div>
                        `
    weatherDataDiv.innerHTML = weatherItem
}

function displayWeather(weatherData) {
    temperatureDiv.innerHTML = weatherData.main.temp

}

