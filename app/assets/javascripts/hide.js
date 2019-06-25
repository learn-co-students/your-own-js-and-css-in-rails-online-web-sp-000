function hideWhenClicked() {
  const element = document.getElementById("hide_this");
  element.addEventListener("click", function(e) {
    e.target.style.display = "none";
  });
}

hideWhenClicked();
