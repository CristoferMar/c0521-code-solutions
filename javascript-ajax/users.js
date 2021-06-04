var $userList = document.getElementById('user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', showReturn);
xhr.send();

function showReturn() {
  console.log('xhr:', xhr);
  console.log('xhr.response:', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = xhr.response[i].name;
    $userList.appendChild($li);
  }
}
