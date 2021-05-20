var $span = document.querySelectorAll('span');
var count = 0;
var $body = document.querySelector('body');

$body.addEventListener('keydown', keyedChar);

function keyedChar(event) {
  var $keyPressed = event.key;
  var char = $span[count].textContent;
  if ($keyPressed === char) {
    $span[count].className = 'passed';
    if (count !== $span.length - 1) {
      $span[count + 1].className = 'next';
    }
    count++;
  } else {
    $span[count].className = 'stuck';
    wrongKey++;
  }
  keyCount++;
  if (count === $span.length) {
    $p.textContent = 'You scored a ' + ((1 - wrongKey / keyCount) * 100) + '% accuracy. Total Keys hit: ' + keyCount + ' | Total mistakes: ' + wrongKey;
    $p.className = 'celebrate';
  }
}

var $p = document.querySelector('p');
var keyCount = 0;
var wrongKey = 0;
