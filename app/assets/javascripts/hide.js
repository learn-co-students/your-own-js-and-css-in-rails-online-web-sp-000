function hideWhenClicked() {
  var target = document.getElementById("hide_this")
  if (target.style.display === "none") {
    target.style.display = "block";
  } else {
    target.style.display = "none";
  }
}
