
$(document).ready(function(){
    $("#home-nav").click(function(){
        $("#home-nav").addClass("active")
        $("#contact-nav").removeClass("active")
        $("#port-nav").removeClass("active")
    });
    $("#contact-nav").click(function(){
        $("#contact-nav").addClass("active")
        $("#home-nav").removeClass("active")
        $("#port-nav").removeClass("active")
        $('html,body').animate({
        scrollTop: $("#contact-sect").offset().top},
        'slow');
    });
    $("#port-nav").click(function(){
        $("#port-nav").addClass("active")
        $("#home-nav").removeClass("active")
        $("#contact-nav").removeClass("active")
        $('html,body').animate({
        scrollTop: $("#portf-sect").offset().top},
        'slow');
    });
});
