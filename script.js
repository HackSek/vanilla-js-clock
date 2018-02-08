let setTime = function() {

  const moment = new Date()
  const seconds = moment.getSeconds()
  const secondsHand = document.querySelector('.seconds')
  const secondsToDegrees = ((seconds / 60) * 360) + 90
  secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`

  const minutes = moment.getMinutes()
  const minutesHand = document.querySelector('.minutes')
  const minutesToDegrees = ((minutes / 60) * 360) + 90
  minutesHand.style.transform = `rotate(${minutesToDegrees}deg)`


  const hours = moment.getHours()
  const hoursHand = document.querySelector('.hours')
  const hoursToDegrees = ((hours / 12) * 360) + 90
  hoursHand.style.transform = `rotate(${hoursToDegrees}deg)`

}

setInterval(setTime, 1000)