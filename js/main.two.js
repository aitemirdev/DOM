$(document).ready(function(){
    $(".burger-menu").click(function(event){
        event.stopPropagation();
    });

    $(document).click(function(){
        $(".burger-menu-items").css("right", "-250px");
        $('input[type="checkbox"]').prop('checked', false);
    });
});