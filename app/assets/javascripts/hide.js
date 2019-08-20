function hideWhenClicked(event) {
  var $targetThis = $(event.target);
  $targetThis.hide();
} //end

$('#hide_this').click(hideWhenClicked);
