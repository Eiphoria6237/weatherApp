//time
let now = new Date()
let month = now.getMonth()
let date = now.getDate()
let dayIndex = now.getDay()
let DAY = ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"]
let day = DAY[dayIndex]
let hour = now.getHours()
let minute = now.getMinutes()


//set time
let showMonth = document.querySelector("#month")
showMonth.innerHTML = month+1
let showDate = document.querySelector("#date")
showDate.innerHTML = date
let showDay = document.querySelector("#day")
showDay.innerHTML = day
let showHour = document.querySelector("#hour")
showHour.innerHTML = hour
let showMin = document.querySelector("#minute")
showMin.innerHTML = minute





//search box
function showTemp(response) {
    let tempNow = document.getElementById("tempNowNum")
    let tempNowValue = Math.round(response.data.main.temp)
    document.getElementById("search-text-input").placeholder = response.data.name
    tempNow.innerHTML = tempNowValue
}

function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input")
    let city = document.getElementById("search-text-input")
    let cityName = city.value
    let apiKey = "92e1bb4d476d213f7b8e7becfa583f21"
    let apiPrefix = "http://api.openweathermap.org/data/2.5/weather?"
    let apiURL = `${apiPrefix}q=${cityName}&appid=${apiKey}&units=metric`


    axios.get(apiURL).then(showTemp)

    //show city name
    document.getElementById("search-text-input").placeholder = searchInput.value
    document.getElementById("search-text-input").value = ""
    
}
let form = document.querySelector("#searchBox")
form.addEventListener("submit", handleSubmit)


//CF button
function changeCF(read) {
    let temp = Math.round(read.data.main.temp)
    return temp
}

function cfFunc() {
    
    let city = document.getElementById("search-text-input")
    let cityName = city.value
    let apiKey = "92e1bb4d476d213f7b8e7becfa583f21"
    let apiPrefix = "http://api.openweathermap.org/data/2.5/weather?"
    let apiURL = `${apiPrefix}q=${cityName}&appid=${apiKey}&units=metric`
    let apiURLF = `${apiPrefix}q=${cityName}&appid=${apiKey}&units=imperial`

    let C = axios.get(apiURL).then(changeCF)
    let F = axios.get(apiURLF).then(changeCF)


    let x = document.getElementById("tempNowNum");
    if (Number(x.innerHTML) === C) {
        x.innerHTML = F;
    } else {
        x.innerHTML = C
    }
    
}

let cfButton = document.getElementById("CF")
cfButton.addEventListener("click", cfFunc)


//current location search engine

function handleGeo (position) {
    let lat = position.coords.latitude
    let lon = positions.coords.longitude


    let apiKey = "92e1bb4d476d213f7b8e7becfa583f21"
    let apiPrefix = "http://api.openweathermap.org/data/2.5/weather?"
    let apiURL = `${apiPrefix}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    axios.get(apiURL).then(showTemp)
}

function geoInfo() {
    navigator.geolocation.getCurrentPosition(handleGeo)
}    


/*
let CLbutton = document.getElementsByClassName("geobutton")
CLbutton.addEventListener("click", geoInfo)
*/








