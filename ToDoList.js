// Strike through an item if it is clicked
// Second argument "li" specifies that li may or may not exist on the current page when the page loaded;
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed"); 
});

// Remove an item when a trash can icon is clicked
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        // this in here referes to span's parent li
        $(this).remove();
    });
    // Stop bubbling up from span to its parent 
    event.stopPropagation();
});

// Adding a new item on the list
$("input[type='text']").on("keypress", function(event){
    // Enter key code is 13 when it is pressed
    if(event.which === 13){
        var newItem = $(this).val();
        // Clear out input text box after enter
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newItem + "</li>");
    }
});

// Hide text input box when plus icon is clicked
$(".fa-plus").on("click", function(){
   $("input[type='text']").fadeToggle(); 
});