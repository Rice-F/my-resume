//导航条缩小
$(window).scroll(function(){
    if( $(".navbar").offset().top > 150 ){
        $(".navbar").addClass("navbar-shrink");
    }else{
        $(".navbar").removeClass("navbar-shrink");
    }
})
