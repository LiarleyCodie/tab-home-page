const clock = function () {
  const hourEl = document.querySelector("#hour")
  const currentHour = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()
  const currentMinutes = new Date().getMinutes()
  const meridian = new Date().getHours() >= 12 ? "PM" : "AM"
  const string = `${currentHour}:${currentMinutes.toString().length <= 1 ? '0' + currentMinutes : currentMinutes} <strong>${meridian}</strong>`

  hourEl.innerHTML = string
}

const date = function () {
  const dateEl = document.querySelector("#date")
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const currentDay = new Date().getDate()
  const currentMonth = months[new Date().getMonth()]
  const currentYear = new Date().getFullYear()
  const string = `<strong>${currentMonth}</strong> ${currentDay} ${currentYear}`

  dateEl.innerHTML = string
}

const dateInterval = setInterval(date, 1000)
const timeInterval = setInterval(clock, 1000)
