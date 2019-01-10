$(document).ready(function() {
    

});

$(window).scroll(function () { 
    var width = $(window).width();
    var scrollDistance = ($(this).scrollTop());

    console.log((scrollDistance/10000));


    if(width >= 1200 && scrollDistance){
        $('#myVideo').css({'top' : ((scrollDistance/1.5)-20)+"px"});
        $('.header-graphic').css({'top' : (scrollDistance/2)+"px"});
        $('.header-graphic').css({'transform' : "scale("+(1-(scrollDistance/5000))+")"});
    }

});

