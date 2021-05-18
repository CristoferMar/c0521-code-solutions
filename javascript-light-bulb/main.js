// get object of body
// get object of div
// add event listener for check on div
// when clicked,
//     check if option day is ON
//     if day
//           change body to night
//           change div to dark
//     if not day
//           change body to day
//           change div to light

var $body = document.querySelector('body');
var $div = document.querySelector('div');

$div.addEventListener('click', clickedListen);

function clickedListen(event) {
  if ($body.className === 'day') {
    $body.className = 'night';
    $div.className = 'dark';
  } else {
    $body.className = 'day';
    $div.className = 'light';
  }
}
