var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', submitHandle);

function submitHandle(event) {
  event.preventDefault();
  var userInfo = {};
  for (var i = 0; i < $form.length - 1; i++) {
    userInfo[$form[i].name] = $form[i].value;
  }
  console.log('User info:', userInfo);
  $form.reset();
}
