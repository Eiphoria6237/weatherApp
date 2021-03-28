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
function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input")
    document.getElementById("search-text-input").placeholder = searchInput.value
    document.getElementById("search-text-input").value = ""
    
}
let form = document.querySelector("#searchBox")
form.addEventListener("submit", handleSubmit)


//CF button
function cfFunc() {
    let x = document.getElementById("tempNowNum");
    if (Number(x.innerHTML) === 21) {
        x.innerHTML = Math.round((21 * 9 / 5) + 32);
    } else {
        x.innerHTML = 21
    }
    
}

let cfButton = document.getElementById("CF")
cfButton.addEventListener("click", cfFunc)


