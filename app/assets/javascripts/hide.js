var link = document.getElementById('hide_this');

link.addEventListener('click', hideWhenClicked);

function hideWhenClicked(event) {
  var element = event.target;
  element.style.display = 'none';
}
