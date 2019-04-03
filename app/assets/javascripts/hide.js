function hideWhenClicked(event) {
  event.target.style.visibility = "hidden"
}

document.querySelector("#hide_this").addEventListener('click', hideWhenClicked)

// $("#hide_this").click(hideWhenClicked)
