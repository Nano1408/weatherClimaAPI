// const key = 'bc53faa5060d584972f87db576cdc060&units=metric'
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=medellin&appid=${key}`
// const clima = fetch(URL)
//                 .then((response) => response.json())
//                 .then((data) => console.log(data.main.temp))
// console.log(clima)

const send = document.querySelector("#send");
const enter = document.querySelector("#city");
const clima = document.querySelector("#clima");
const viento = document.getElementById("viento");

send.addEventListener("click",queryWheather);
enter.addEventListener("keypress", enterTecla);

async function queryWheather(e){
    e.preventDefault();
     const city = document.querySelector("#city").value;
    const key = 'bc53faa5060d584972f87db576cdc060&units=metric'
    // const lang = "es"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=es`
    
    const weather = fetch(url)
    .then((response) => response.json())
    .then((data) => showIntoDOM(data))
}
 function enterTecla(e){
     const teclapresionada = e.keyCode;
     if(teclapresionada === 13){
         document.getElementById("send").click()
         e.preventDefault()
     }
 }

function showIntoDOM(data){
    clearHTML()
    const {name,main:{temp,humidity,feels_like}, weather, wind:{speed, gust}} = data;

    const celsius = document.createElement("p");
    celsius.classList.add("celsius")
    celsius.textContent = `${Math.ceil(temp)}ºC ${name}`
    clima.appendChild(celsius)
    const urlIcons = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    const icon = document.createElement("img");
    icon.src = urlIcons
    clima.appendChild(icon)

    const humidityData = document.createElement("p");
    humidityData.classList.add("celsius")
    humidityData.textContent = `humedad: ${humidity}% ${weather[0]["description"]}`
    clima.appendChild(humidityData)

    const velocidadViento = document.createElement("p");
    velocidadViento.textContent = `Viento: a ${speed}m/s`
    viento.appendChild(velocidadViento)

    const velocidadRafaga = document.createElement("p");
    velocidadRafaga.textContent = `Rafaga: a ${gust}m/s`
    viento.appendChild(velocidadRafaga)
 console.log(data)
}

function clearHTML(){
    while(clima.firstChild){
        clima.removeChild(clima.firstChild)
        viento.removeChild(viento.firstChild)
    }
}


//https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893