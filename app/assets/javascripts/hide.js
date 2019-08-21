//Create the function hideWhenClicked that hides the element that was clicked. 
//Make sure to bind to #hide_this


function hideWhenClicked(event) {
    const $target = $(event.target);
    console.log($target)
    $target.hide();

}

$('#hide_this').click(hideWhenClicked);
//this is the same thing as addEventListner
                                        
//so if #hide_this is .click run (hideWhenClicked)