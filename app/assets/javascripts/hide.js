function hideWhenClicked() {
  $("#hide_this").onclick = function() {
    this.style.visibility = "hidden";
    }.bind(this)
  }
}
