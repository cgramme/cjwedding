$(document).ready(function() {
    

});

$(window).scroll(function () { 
    var width = $(window).width();
    var scrollDistance = ($(this).scrollTop());


    if(width >= 1200 && scrollDistance){
        $('#myVideo').css({'top' : ((scrollDistance/1.5)-20)+"px"});
        $('.header-graphic').css({'top' : (scrollDistance/2)+"px"});
        $('.header-graphic').css({'transform' : "scale("+(1-(scrollDistance/2000))+")"});


    }

    setTimeout(function(){

        if(scrollDistance == 0){
            $('#myVideo').css({'top' : ((scrollDistance/1.5)-20)+"px"});  
        }
    }, 100);

});

$(".nav li").click(function(){
    var loadPage;



    if($(this).text() == "About"){
        loadPage = "about_content";
        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
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

    $("#ajaxContent").addClass('fade-out').delay(500).queue(function(next){

        $("#ajaxContent").html(result).removeClass('fade-out').addClass('fade-in');

        next();

    });

  }});
});


function countdown (){
    var countDownDate = new Date("June 1, 2019").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("days-to-go").innerHTML = days + " days to go";
    if (distance < 0) {
        document.getElementById("days-to-go").innerHTML = "We Are Married!";
    }
}

countdown();


