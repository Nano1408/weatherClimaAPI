// const key = 'bc53faa5060d584972f87db576cdc060&units=metric'
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=medellin&appid=${key}`
// const clima = fetch(URL)
//                 .then((response) => response.json())
//                 .then((data) => console.log(data.main.temp))
// console.log(clima)

const send = document.querySelector("#send");
const clima = document.querySelector("#clima");

send.addEventListener("click",queryWheather);
// city.addEventListener("enterchange",queryWheather)

function queryWheather(e){
    e.preventDefault();
    const city = document.querySelector("#city").value;
    const key = 'bc53faa5060d584972f87db576cdc060&units=metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    
    const weather = fetch(url)
    .then((response) => response.json())
    .then((data) => showIntoDOM(data))
}
function showIntoDOM(data){
    clearHTML()
    const {name,main:{temp,humidity,feels_like}, weather} = data;

    const celsius = document.createElement("p");
    celsius.classList.add("celsius")
    celsius.textContent = `La temperatura en ${name} es ${Math.ceil(temp)}º`
    clima.appendChild(celsius)
    const urlIcons = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    const icon = document.createElement("img");
    icon.src = urlIcons
    clima.appendChild(icon)

    const humidityData = document.createElement("p");
    humidityData.classList.add("celsius")
    humidityData.textContent = `Su humedad es del ${humidity}% ${weather[0]["description"]}`
    clima.appendChild(humidityData)
 console.log(data)
}

function clearHTML(){
    while(clima.firstChild){
        clima.removeChild(clima.firstChild)
    }
}


//https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893