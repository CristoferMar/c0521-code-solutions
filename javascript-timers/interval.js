var $h1 = document.querySelector('h1');

function countDown() {
  if (timerID === 3) {
    $h1.textContent = 3;
  }
  if (timerID === 2) {
    $h1.textContent = 2;
  }
  if (timerID === 1) {
    $h1.textContent = 1;
  }
  if (timerID === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intId);
  }
  timerID--;
}

var timerID = 4;
var intId = setInterval(countDown, 1000);
