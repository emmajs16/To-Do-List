$("body").ready(function() {
    $("input").hide();
})
function addItem() {
    var newItem = $("input").val();
    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${newItem}</li>`);
    $("input").hide();
    $("input").val("");
}
$(".fa-plus").click(function() {
    $("input").toggle();
});

$('#container').on('click', '.fa-trash',function() {
    $(this).closest('li').remove();
});

$("input").keypress(function(event) {
    if (event.which === 13) {
        if ($("input").val() != "") {
            addItem();
        }
    }
});

$('#container').on('click', 'li',function(){
    $(this).toggleClass("completed");
});
