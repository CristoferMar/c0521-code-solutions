var $form = document.querySelector('#contact-form');

var userInfo = {};

$form.addEventListener('submit', submitHandle);

function submitHandle(event) {
  event.preventDefault();
  for (var i = 0; i < $form.length - 1; i++) {
    userInfo[$form[i].name] = $form[i].value;
  }
  console.log('User info:', userInfo);
  $form.reset();
}
