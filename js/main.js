$(document).ready(function () {
    $('.mob-drop').click(function () {
        $('.mob-menu').slideToggle(500);
    });
    
   
    $(".show-more-jobs").click(function () {
        $(".show-more-jobs").hide();
        $("#more-jobs").show();
    });
       $(".hide-more-jobs").click(function () {
        $("#more-jobs").hide();
        $(".show-more-jobs").show();
    });     
    $('.scroll-about').click(function () {
        $('html, body').animate({
            scrollTop: $('#section-about').offset().top
        }, 800);
    });
    $('.scroll-jobs').click(function () {
        $('html, body').animate({
            scrollTop: $('#section-jobs').offset().top
        }, 800);
    });
    $('.scroll-contact').click(function () {
        $('html, body').animate({
            scrollTop: $('#section-social').offset().top
        }, 800);
    });
 
    


});

