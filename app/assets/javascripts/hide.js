var hide_it = document.getElementById("hide_this");
hide_it.addEventListener('click', hideWhenClicked);

function hideWhenClicked() {
    this.style.display = "none";
}
