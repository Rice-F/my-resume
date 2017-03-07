//导航条固定
$(window).scroll(function(){
    if( $(".navbar").offset().top > 150 ){
        $(".navbar").addClass("navbar-shrink");
    }else{
        $(".navbar").removeClass("navbar-shrink");
    }
})

//导航条对应
$(function(){
    $("ul.nav").onePageNav();
});

