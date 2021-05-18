// store blue button
// store red button

// if blue button is clicked, change class of div from display-none to modal
// if red btn in clicked, change class of div back to sisplay-none

var $blubtn = document.querySelector('.btnBlue');
var $redbtn = document.querySelector('.btnRed');
var $toggleModal = document.querySelector('#toggleModal');

function doneClicked(event) {
  if ($toggleModal.className === 'modal') {
    $toggleModal.className = 'display-none';
  } else {
    $toggleModal.className = 'modal';
  }
}

$blubtn.addEventListener('click', doneClicked);
$redbtn.addEventListener('click', doneClicked);
