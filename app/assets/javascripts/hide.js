// function hideWhenClicked () {
//     document.getElementById('hide_this').style.visibility = "hidden";
   
// }
function hideWhenClicked(e){
	let $target = $(e.target);
	$target.hide();

}

$('#hide_this').click(hideWhenClicked)
