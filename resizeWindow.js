function resizeWindow() {
    var width = $(window).width();
    $(".testing-text").text(width);
}
$(window).resize(function() {
    resizeWindow();
});