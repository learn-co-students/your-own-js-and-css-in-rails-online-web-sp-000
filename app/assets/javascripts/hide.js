var el = document.getElementById('hide_this');
function hideWhenClicked() {
  // hides the element that was clicked.
//Make sure to bind to #hide_this.
//If declaring any variables in your JavaScript file, use var instead of let or const or else Capybara will throw an error:
  //var el = document.getElementById('hide_this')
  el.innerText = "";
}
el.addEventListener('click', hideWhenClicked);
