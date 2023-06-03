$(".list-group-item list-group-item-action text-white rounded-0").on('click', function(){
    $(".list-group-item list-group-item-action text-white rounded-0").removeClass('active');
    $(this).toggleClass('active');
});