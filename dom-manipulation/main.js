var clicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function addClicks() {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;

  var newClass = 'hot-button';
  if (clicks < 4) {
    newClass += ' cold';
  } else if (clicks < 7) {
    newClass += ' cool';
  } else if (clicks < 10) {
    newClass += ' tepid';
  } else if (clicks < 13) {
    newClass += ' warm';
  } else if (clicks < 16) {
    newClass += ' hot';
  } else {
    newClass += ' nuclear';
  }
  $hotButton.className = newClass;
}
$hotButton.addEventListener('click', addClicks);
