var hide_link = document.getElementById("hide_this")

var hideWhenClicked = function(){
    this.style.display = "none";
}.bind(hide_link)

hide_link.addEventListener('click', function(event) {
    hideWhenClicked()
  });

  