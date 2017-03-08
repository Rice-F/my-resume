//导航条固定
$(window).scroll(function(){
    if( $(".navbar").offset().top > 150 ){
        $(".navbar").addClass("navbar-shrink");
    }else{
        $(".navbar").removeClass("navbar-shrink");
    }
});

//滚动监听使导航条高亮
$(function(){
    $('body').scrollspy({ target: '#navbar-responsive-collapse' });
})


//点击导航项滚动效果
$(function() {
    $("a.page-scroll").click(function(){
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    })
});

//project-hover
$('div.project a').mouseenter(function(){
    $(this).find('.overlay-bgColor').stop().animate({
        opacity: .8
    }, 400 );
    $(this).find('p').stop().animate({
        opacity: 1
    }, 400 );

}).mouseleave(function(){
    $(this).find('.overlay-bgColor, p').stop().animate({
        opacity: 0
    }, 400 );
});
