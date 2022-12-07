const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5779334&appid=4c8b4191b0729e2e0685564301e7589b&units=imperial"

fetch(apiURL)
.then((response) => response.json())
.then((weatherData) => {
    console.log(weatherData);

    const weekdays = new Array(7);
    weekdays[0] = 'Sunday'
    weekdays[1] = 'Monday'
    weekdays[2] = 'Tuesday'
    weekdays[3] = 'Wednesday'
    weekdays[4] = 'Thursday'
    weekdays[5] = 'Friday'
    weekdays[6] = 'Saturday'

    const d = new Date();
    const todaysNumber = d.getDay();

    let forecastDay = todaysNumber;

    for (let i = 0; i < weatherData.list.length; i++) {
        
        var time = weatherData.list[i].dt_txt;

        if (time.includes('5:00:00')) {
            forecastDay += 1;
            if (forecastDay === 7) {
                forecastDay = 0;
            }
            let dayName = document.createElement('span');
            dayName.textContent = weekdays[forecastDay]
            console.log(">"+weekdays[forecastDay])

            let temp = document.createElement('p')
            temp.textContent = weatherData.list[i].main.temp + "\xB0";
            console.log(weatherData.list[i].main.temp + "\xB0")

            let iconCode = weatherData.list[i].weather[0].icon;
            let iconAlt = weatherData.list[i].weather[0].description;
            let icon_path = `//openweathermap.org/img/wn/${iconCode}@2x.png`;
            let icon = document.createElement('img')
            icon.src = icon_path
            icon.alt = iconAlt

            let dailyForecast = document.createElement('div')
            dailyForecast.appendChild(dayName)
            dailyForecast.appendChild(temp)
            dailyForecast.appendChild(icon)

            document.getElementById('mainContent').appendChild(dailyForecast)
        }
    }

    //-7 UTC for Utah





    document.getElementById('place').innerHTML = weatherData.city.name


    //const icon = weatherData.weather[0].icon;
    //const icon_path = `//openweathermap.org/img/wn/${icon}@2x.png`;

    //document.getElementById('weather_icon').src = icon_path

});
