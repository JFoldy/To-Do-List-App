// Check off specific to-dos list items by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete to-do item
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// add item to list and clear the input
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        // grabbing new text from input
       var todoText = ($(this).val());
       $(this).val("");
       // create new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

// plus button functionality to hide or show input
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})