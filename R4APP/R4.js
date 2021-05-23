const apikey = "a4f701a3f6df0f9d08f18cebb3eae155";

const getWeather = () => {

    const city = document.querySelector('#search').value;
    const units = document.querySelector('#units').value;
    fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=${city}&units=${units}`)
        .then(a => a.json())
        .then(res => {
            document.querySelector("img").src = res.current.weather_icons[0];
            document.querySelector("#titleoutput").innerHTML =

                `
                    
            <h1>${res.current.weather_descriptions[0]}</h1>
        
            `


            document.querySelector("#output1").innerHTML =
                `
                    
            
                <h3> Temp:  ${res.current.temperature}° </h3>
                <p>Humedad: ${res.current.humidity}%</p>
                

                `



            document.querySelector("#output2").innerHTML =
                // `
                // <p>Presion: ${res.current.pressure} MB </p>
                // <p>Probabilidad de Precipitaciones: ${res.current.precip} MM </p>

                // `

                ` <h4>Nubosidad: ${res.current.cloudcover}%</h4>
                <p>Visibilidad: ${res.current.visibility}km</p>
                <p>Rayos UV: ${res.current.uv_index}</p>
                `


            document.querySelector("#output3").innerHTML =
                `
                <h4> Viento</h4>
                <p>Velocidad: ${res.current.wind_speed}k/h </p>
                <p>Direccion: ${res.current.wind_dir}</p>

                `
            document.querySelector("#output4").innerHTML =
                `
                <h4>Lugar</h4>
                <p> ${res.location.country}</p>
                <p> ${res.location.region}</p>
                <p> ${res.location.localtime}</p>

                `
            document.querySelector("#output5").innerHTML =
                `
                <h4>Localizacion</h4>
                <p>lat: ${res.location.lat}</p>
                <p>long: ${res.location.lon}</p>
                <p>UTC offset: ${res.location.utc_offset}</p>
                `


        })



}