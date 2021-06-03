var $carosel = document.querySelector('.carosel');
var allCircles = document.querySelectorAll('.circle-btn');
var allViews = document.querySelectorAll('.view');

var currentImg = 1;

var intervalID = setInterval(autoSwap, 3000);

$carosel.addEventListener('click', clickHandeler);

function swap(viewNumber) {
  clearInterval(intervalID);
  for (var i = 0; i < allViews.length; i++) {
    if (parseInt(allViews[i].getAttribute('data-view')) === viewNumber) {
      allViews[i].className = 'view';
      allCircles[i].className = 'circle-btn fas fa-circle';
    } else {
      allViews[i].className = 'view hidden';
      allCircles[i].className = 'circle-btn far fa-circle';
    }
  }
  intervalID = setInterval(autoSwap, 3000);
}

function clickHandeler(event) {
  if (event.target.matches('.circle-btn')) {
    currentImg = parseInt(event.target.getAttribute('data-view'));
    swap(parseInt(event.target.getAttribute('data-view')));
    // reset inverval timing
    return;
  }

  if (event.target.closest('.arrows')) {
    if (event.target.closest('.last')) { currentImg -= 1; } else { currentImg += 1; }
    cycleSwap();
    swap(currentImg);
  }
}

function cycleSwap() {
  if (currentImg === 0) {
    currentImg = 5;
  }
  if (currentImg === 6) {
    currentImg = 1;
  }
}

function autoSwap() {
  currentImg++;
  cycleSwap();
  swap(currentImg);
}
