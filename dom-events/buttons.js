function handleClick(event) {
  console.log('button clicked');
  console.log('handleClick event:', event);
  console.log('event target:', event.target);
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('handleMouseover event:', event);
  console.log('event target:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('handleDoubleClick event:', event);
  console.log('event target:', event.target);
}

var $doubleClickedButton = document.querySelector('.double-click-button');
$doubleClickedButton.addEventListener('dblclick', handleDoubleClick);
