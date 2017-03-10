;(function(){

    //navbarFixed
    var navbarFixed = function(){
        $(window).scroll(function(){
            if( $(".navbar").offset().top > 150 ){
                $(".navbar").addClass("navbar-shrink");
            }else{
                $(".navbar").removeClass("navbar-shrink");
            }
        });
    }

    //initNavbarTop
    var initNavbarTop = function(){
        if( $(document).scrollTop() > 865 ){
            $(".navbar").addClass("navbar-shrink");
        }else{
            $(".navbar").removeClass("navbar-shrink");
        }
    }

    //scrollSpy
    var scrollSpy = function(){
        $('body').scrollspy({ target: '#navbar-responsive-collapse' });
    }

    //projectHover
    var projectHover = function(){
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
    }

    //Animate pageScroll
    var pageScroll = function(){
        $("a.page-scroll").click(function(){
            var $anchor = $(this);
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }



    navbarFixed();
    initNavbarTop();
    scrollSpy();
    projectHover();
    pageScroll();
}())