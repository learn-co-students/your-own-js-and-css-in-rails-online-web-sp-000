function hideWhenClicked() {
  const element = document.getElementById("hide_this");
  element.addEventListener("click", function(event) {
    event.target.style.display = "none";
  });
}

hideWhenClicked();