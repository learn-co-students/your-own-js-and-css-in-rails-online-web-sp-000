function hideWhenClicked(e) {
  const hidden = $(e.target)
  hidden.hide()
}

$('#hide_this').click(hideWhenClicked)