const seconds = document.querySelector('.second-hand');
const minutes = document.querySelector(".min-hand");
const hours = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const countSeconds = now.getSeconds();
  const secondsDegrees = ((countSeconds / 60) *360) +90;
  console.log(countSeconds);
  seconds.style.transform = `rotate(${secondsDegrees}deg)`;

  const now2 = new Date();
  const countMinutes = now2.getMinutes();
  const minutesDegrees = ((countMinutes / 60) *360) +90;
  minutes.style.transform = `rotate(${minutesDegrees}deg)`;

  const now3 = new Date();
  const countHours = now3.getHours();
  const hoursDegrees = ((countHours / 12) *360) +90;
  hours.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
