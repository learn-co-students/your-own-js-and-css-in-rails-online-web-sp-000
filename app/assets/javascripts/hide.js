// var link = document.getElementById('hide_this');

// link.addEventListener('click', function(event) {
//     this.style.display = "none";
// }.bind(this))

// function hideWhenClicked() {



// }

function hideWhenClicked(event) {
    debugger
    var $target = $(event.target);
    $target.hide();
}

$('#hide_this').click(hideWhenClicked);