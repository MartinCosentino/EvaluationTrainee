const apikey = "a4f701a3f6df0f9d08f18cebb3eae155";

const getWeatherRosario = () => {

    fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=rosario`)
        .then(a => a.json())
        .then(res => {



            document.querySelector(".temp").innerHTML =
                `
               ${res.current.temperature}°
                `

            document.querySelector(".humedad").innerHTML =
                `
               ${res.current.humidity}%
                `
            document.querySelector(".visibilidad").innerHTML =
                `
               ${res.current.visibility}%
                `

            document.querySelector(".viento").innerHTML =
                `
               ${res.current.wind_speed} km
                `
        })



}

const getWeatherBsAs = () => {

    fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=BuenosAires`)
        .then(a => a.json())
        .then(res => {



            document.querySelector(".temp2").innerHTML =
                `
               ${res.current.temperature}°
                `

            document.querySelector(".humedad2").innerHTML =
                `
               ${res.current.humidity}%
                `
            document.querySelector(".visibilidad2").innerHTML =
                `
               ${res.current.visibility}%
                `

            document.querySelector(".viento2").innerHTML =
                `
               ${res.current.wind_speed} km
                `
        })



}


const getWeatherCBA = () => {

    fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=Cordoba`)
        .then(a => a.json())
        .then(res => {



            document.querySelector(".temp3").innerHTML =
                `
               ${res.current.temperature}°
                `

            document.querySelector(".humedad3").innerHTML =
                `
               ${res.current.humidity}%
                `
            document.querySelector(".visibilidad3").innerHTML =
                `
               ${res.current.visibility}%
                `

            document.querySelector(".viento3").innerHTML =
                `
               ${res.current.wind_speed} km
                `
        })



}


const getWeatherMIS = () => {

    fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=Misiones`)
        .then(a => a.json())
        .then(res => {



            document.querySelector(".temp4").innerHTML =
                `
               ${res.current.temperature}°
                `

            document.querySelector(".humedad4").innerHTML =
                `
               ${res.current.humidity}%
                `
            document.querySelector(".visibilidad4").innerHTML =
                `
               ${res.current.visibility}%
                `

            document.querySelector(".viento4").innerHTML =
                `
               ${res.current.wind_speed} km
                `
        })



}


const getWeatherALL = () => {

    getWeatherRosario();
    getWeatherBsAs();
    getWeatherCBA();
    getWeatherMIS();

}
