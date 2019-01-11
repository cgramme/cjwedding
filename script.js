$(document).ready(function() {
    

});

$(window).scroll(function () { 
    var width = $(window).width();
    var scrollDistance = ($(this).scrollTop());


    if(width >= 1200 && scrollDistance){
        $('#myVideo').css({'top' : ((scrollDistance/1.5)-20)+"px"});
        $('.header-graphic').css({'top' : (scrollDistance/2)+"px"});
        $('.header-graphic').css({'transform' : "scale("+(1-(scrollDistance/5000))+")"});
    }

});

$(".nav li").click(function(){
    var loadPage;



    if($(this).text() == "About"){
        loadPage = "about_content";
    }else if($(this).text() == "Bride's Party"){
        loadPage = "bride_content";
    }else if($(this).text() == "Groom's Party"){
        loadPage = "groom_content";
    }else if($(this).text() == "Registry"){
        loadPage = "registry_content";
    }else if($(this).text() == "Contact"){
        loadPage = "contact_content";
    }else{
        loadPage = "about_content";
    }


  $.ajax({url: loadPage+".html", success: function(result){
    $("#ajaxContent").html(result);
  }});
});

