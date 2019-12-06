// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockContainer = document.querySelector('.js-clock');
const time = clockContainer.querySelector('.js-clock-time');

function getTime() {
  // Don't delete this.
  const xmasDay = new Date('2019-12-24:00:00:00+0900');
  const nowUTC = Date.parse(new Date().toUTCString() + NINE_HOURS_MILLISECONDS);
  const distance = xmasDay.getTime() - nowUTC;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  time.innerText =
    `${days < 10 ? `0${days}` : days}` +
    'days ' +
    `${hours < 10 ? `0${hours}` : hours}` +
    'hours ' +
    `${minutes < 10 ? `0${minutes}` : minutes}` +
    'mins ' +
    `${seconds < 10 ? `0${seconds}` : seconds}` +
    'secs';

  if (distance < 0) {
    clearInterval(getTime);
    time.innerHTML = 'Happy Merry Christmas Eve! Tomorrow is the Christmas!!!';
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
