async function getWeatherData(){
    const cityNAme =document.querySelector("#cityInput").value
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNAme}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
    .then(res=>res.json())
    .then(data=>renderData(data))
    document.querySelector("#cityInput").value = ''
}

function renderData(data){
    document.querySelector("#dataResult").innerHTML = `
                    <h3>${data.name} (<i>${data.sys.country}</i>)</h3>
                    <p><b>Temprature</b> : ${data.main.temp}</p>
                    <p>
                    <b class="">${data.weather[0].main} </b> : ${data.weather[0].description}
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
                    </p>
    `
}