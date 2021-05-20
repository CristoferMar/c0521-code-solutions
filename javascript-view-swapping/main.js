var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

var $tabContainer = document.querySelector('.tab-container');
$tabContainer.addEventListener('click', tabHandler);

function tabHandler(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }

    var dataView = event.target.getAttribute('data-view');

    for (i = 0; i < $views.length; i++) {
      if ($views[i].getAttribute('data-view') === dataView) {
        $views[i].className = 'view';
      } else {
        $views[i].className = 'hidden';
      }
    }
  }
}
