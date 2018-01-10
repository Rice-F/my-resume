;(function () {

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    //navbarFixed
    var navbarFixed = function () {
        $(window).scroll(function () {
            if ($(".navbar").offset().top > 150) {
                $(".navbar").addClass("navbar-shrink");
            } else {
                $(".navbar").removeClass("navbar-shrink");
            }
        });
    }

    //initNavbarTop
    var initNavbarTop = function () {
        if ($(document).scrollTop() > 865) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    }

    //scrollSpy
    var scrollSpy = function () {
        $('body').scrollspy({target: '#navbar-responsive-collapse'});
    }

    //projectHover
    var projectHover = function () {
        $('div.project a').mouseenter(function () {
            $(this).find('.overlay-bgColor').stop().animate({
                opacity: .8
            }, 400);
            $(this).find('p').stop().animate({
                opacity: 1
            }, 400);

        }).mouseleave(function () {
            $(this).find('.overlay-bgColor, p').stop().animate({
                opacity: 0
            }, 400);
        });
    }

    //Animate pageScroll
    var pageScroll = function () {
        $("a.page-scroll").click(function () {
            var $anchor = $(this);
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    //Animate header
    var animateHeader = function () {
        if ($("#knowMe").length > 0) {
            $("#knowMe .to-animate").each(function (index) {
                var el = $(this);
                if (el.hasClass('fadeInUp animated')) {
                    el.removeClass('fadeInUp animated');
                }
                setTimeout(function () {
                    el.addClass("fadeInUp animated");
                }, index * 200, 'easeInOutExpo')
            })
        }
    }

    //Animate aboutMe
    var animateAboutMe = function () {
        if ($("#aboutMe").length > 0) {
            $("#aboutMe .to-animate").each(function (index) {
                var el = $(this);
                setTimeout(function () {
                    el.addClass("fadeInUp animated");
                }, index * 200, 'easeInOutExpo')
            })
        }
    }

    //Animate skills
    var animateSkills = function () {
        if ($("#skills").length > 0) {
            $("#skills .to-animate").each(function (index) {
                var el = $(this);
                setTimeout(function () {
                    el.addClass("fadeInUp animated");
                }, index * 200, 'easeInOutExpo')
            })
        }
    }

    //Animate projects
    var animateProjects = function () {
        if ($("#projects").length > 0) {
            $("#projects .to-animate").each(function (index) {
                var el = $(this);
                setTimeout(function () {
                    el.addClass("fadeInUp animated");
                }, index * 200, 'easeInOutExpo')
            })
        }
    }

    //Animate contact
    var animateContact = function () {
        if ($("#contact").length > 0) {
            $("#contact .to-animate").each(function (index) {
                var el = $(this);
                setTimeout(function () {
                    el.addClass("fadeInUp animated");
                }, index * 200, 'easeInOutExpo')
            })
        }
    }

    //WayPoints
    var headerWayPoint = function () {
        if ($('#knowMe').length > 0) {
            $('#knowMe').waypoint(function (direction) {
                if (direction === 'down' && !$(this).hasClass('animated')) {
                    setTimeout(animateHeader, 200);
                    $(this).addClass('animated');
                }
            }, {offset: '90%'});
        }
    };

    var aboutMeWayPoint = function () {
        if ($('#aboutMe').length > 0) {
            $('#aboutMe').waypoint(function (direction) {
                if (direction === 'down' && !$(this).hasClass('animated')) {
                    setTimeout(animateAboutMe, 200);
                    $(this).addClass('animated');
                }
            }, {offset: '90%'});
        }
    };

    var skillsWayPoint = function () {
        if ($('#skills').length > 0) {
            $('#skills').waypoint(function (direction) {
                if (direction === 'down' && !$(this).hasClass('animated')) {
                    setTimeout(animateSkills, 200);
                    $(this).addClass('animated');
                }
            }, {offset: '90%'});
        }
    };

    var projectsWayPoint = function () {
        if ($('#projects').length > 0) {
            $('#projects').waypoint(function (direction) {
                if (direction === 'down' && !$(this).hasClass('animated')) {
                    setTimeout(animateProjects, 200);
                    $(this).addClass('animated');
                }
            }, {offset: '90%'});
        }
    };

    var contactWayPoint = function () {
        if ($('#contact').length > 0) {
            $('#contact').waypoint(function (direction) {
                if (direction === 'down' && !$(this).hasClass('animated')) {
                    setTimeout(animateContact, 200);
                    $(this).addClass('animated');
                }
            }, {offset: '90%'});
        }
    };

    $(function () {
        parallax();
        navbarFixed();
        initNavbarTop();
        scrollSpy();
        projectHover();
        pageScroll();

        headerWayPoint();
        projectsWayPoint();
        aboutMeWayPoint();
        skillsWayPoint();
        contactWayPoint();
    })


    var x_arr = new Array();
    var y_arr = new Array();
    var x = y = m = 0;
    for (var i = 0; i < 800; i++) {
        if (i >= 400) {
            x = m;
            y = 200 + Math.sqrt(40000 - Math.pow(x - 200, 2));
            m--;
        }
        else {
            x = m;
            y = 200 - Math.sqrt(40000 - Math.pow(x - 200, 2));
            m++;
        }
        x_arr[i] = x - 60;
        y_arr[i] = parseInt(y) - 25;
    }

    /* 圆形轨迹 */
    var gitMove = document.getElementById('link-github');
    var zhihuMove = document.getElementById('link-zhihu')
    var blogMove = document.getElementById('link-jianshu')
    var g_num = 0;
    var w_num = 0;
    var b_num = 0;

    function movegit() {
        if (g_num <= 750) {
            // gitMove.css({"left":x_arr[g_num] + "px","top":y_arr[g_num]+"px"});
            gitMove.style.left = x_arr[g_num] + 'px';
            gitMove.style.top = y_arr[g_num] + 'px';
            g_num += 3;
        }
        else {
            clearInterval(gitTimer);
        }
    }

    function movezhihu() {
        if (w_num <= 400) {
            // weiboMove.css({"left":x_arr[w_num]+"px","top":y_arr[w_num]});
            zhihuMove.style.left = x_arr[w_num] + 'px';
            zhihuMove.style.top = y_arr[w_num] + 'px';
            w_num += 3;
        }
        else {
            clearInterval(zhiTimer);
        }
    }

    function moveblog() {
        if (b_num <= 90) {
            // blogMove.css({"left":x_arr[b_num]+"px","top":y_arr[b_num]});
            blogMove.style.left = x_arr[b_num] + 'px';
            blogMove.style.top = y_arr[b_num] + 'px';
            b_num += 3;
        }
        else {
            clearInterval(blogTimer);
        }
    }
    function showLink() {
        var docWidth = document.body.clientWidth;
        if (docWidth >= 768) {
            $('.intro-link .mobile-link-github, .intro-link .mobile-link-zhihu, .intro-link .mobile-link-jianshu').hide();
        }else{
            $('.intro-link .mobile-link-github, .intro-link .mobile-link-zhihu, .intro-link .mobile-link-jianshu').show();
        }
    }
    window.onresize = function () {
        showLink();
    };
    showLink();

    movegit();
    var gitTimer = setInterval(movegit, 7);
    movezhihu();
    var zhiTimer = setInterval(movezhihu, 7);
    moveblog();
    var blogTimer = setInterval(moveblog, 7);


}())
