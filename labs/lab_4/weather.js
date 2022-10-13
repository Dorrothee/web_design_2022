fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=7378a94894ca27685ed9113fb79889bd')
    .then(res => res.json())
    .then(function(data){
        console.log(data);
        document.querySelector('.name').textContent = data.name;

        document.querySelector('.degree').innerHTML = "Temperature: " + Math.round(data.main.temp - 273) + '°C';

        document.querySelector('.feel').innerHTML = "Feels like: " + Math.round(data.main.feels_like - 273) + '°C';

        document.querySelector('.disc').textContent = data.weather[0]['description'];

        document.querySelector('.wind').textContent = "Wind speed: " + data.wind['speed'] + " m/s";

        document.querySelector('.humidity').textContent = "Humidity: " + data.main['humidity'] + "%";

        document.querySelector('.img li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0] ['icon']}@2x.png">`;

    })

    .catch(function(){});