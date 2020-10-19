const timer = document.querySelector('.modal-timer')

const countDownDate = new Date().getTime() + 16 * 60 * 1000;

const x = setInterval(function() {
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for hours, minutes and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML =  hours + ':' + minutes + ':' + seconds;

  if (distance < 0) {
    clearInterval(x)
    timer.innerHTML = 'Expired'
  }
}, 1000)