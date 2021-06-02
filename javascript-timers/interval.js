var $h1 = document.querySelector('h1');

function countDown() {
  if (timerID === 0) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intId);
    return;
  }
  $h1.textContent = timerID;
  timerID--;
}

var timerID = 4;
var intId = setInterval(countDown, 1000);
