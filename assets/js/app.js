! function (e) {
    "use strict";
    $(window).on("load", function () {
        setTimeout(function () {
            $(".preloader").fadeOut()
        }, 800)
    }),
    jQuery(document).on("ready", function () {
        e("a.smooth-scroll").on("click", function (a) {
            var t = e(this);
            e("html, body").stop().animate({
                scrollTop: e(t.attr("href")).offset().top - 0
            }, 1200, "easeInOutExpo"), a.preventDefault()
        }), e("body").scrollspy({
            target: ".navbar-collapse",
            offset: 195
        }), e(".testimonilas-active").owlCarousel({
            loop: !0,
            margin: 0,
            center: !0,
            mouseDrag: !0,
            autoplay: !0,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 1,
                    center: !1
                },
                768: {
                    items: 2,
                    center: !1
                },
                980: {
                    items: 3
                },
                1199: {
                    items: 3
                }
            }
        }), e(".brand-product-active").owlCarousel({
            loop: !0,
            margin: 10,
            mouseDrag: !0,
            autoplay: !0,
            autoplayTimeout:7000,
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 2
                },
                479: {
                    items: 2
                },
                768: {
                    items: 3
                },
                980: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }
        });
        new Swiper(".s1", {
            effect: "coverflow",
            loop: !0,
            slidesPerView: "auto",
            grabCursor: !1,
            parallax: !0,
            centeredSlides: !0,
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: !1
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            }
        });
        e(window).on("scroll", function () {
            e(window).scrollTop() < 70 ? e(".site-header").removeClass("sticky") : e(".site-header").addClass("sticky")
        }), e(function () {
            function a(a, t) {
                a.each(function () {
                    var a = e(this),
                        o = a.attr("data-animation"),
                        i = a.attr("data-animation-delay");
                    a.css({
                        "-webkit-animation-delay": i,
                        "-moz-animation-delay": i,
                        "animation-delay": i
                    }), (t || a).waypoint(function () {
                        a.addClass("animated").css("visibility", "visible"), a.addClass("animated").addClass(o)
                    }, {
                        triggerOnce: !0,
                        offset: "90%"
                    })
                })
            }
            a(e(".animation")), a(e(".staggered-animation"), e(".staggered-animation-wrap"))
        }), e.scrollUp({
            scrollText: '<i class="ti-arrow-up"></i>'
        }), e(".counter").counterUp({
            delay: 10,
            time: 1e3
        }), e(".navbar-toggler").on("click", function () {
            e(".navbar-toggler").toggleClass("cg")
        }), e(".main-menu ul > li.nav-item > a.nav-link").on("click", function () {
            e(".navbar-collapse").removeClass("show"), e(".navbar-toggler").removeClass("cg")
        }), e('[data-toggle="tooltip"]').tooltip(), e(".player").mb_YTPlayer(), e(".video-pop").magnificPopup({
            type: "iframe",
            removalDelay: 300,
            mainClass: "mfp-fade"
        })
    });



    // some more scripts
    //the year today
	var this_year= moment().format('YYYY');
    $(".this-year").text(this_year);

    $('.owl-carousel-text').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        nav:false,
        items:1,
        autoplay:true,       
        autoplayHoverPause:true,
        animateOut: 'backOutDown',
        animateIn: 'fadeInDown',
        smartSpeed:450,
        autoplayTimeout:3000,
        navigation: false,
        navText: [" ", " "]
       
    });

    // custom smooth scrolling
    jQuery($ => {
        // The speed of the scroll in milliseconds
        const speed = 1000;
    
        $('a[href*="#"]')
          .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
          .unbind('click.smoothScroll')
          .bind('click.smoothScroll', event => {
            const targetId = event.currentTarget.getAttribute('href').split('#')[1];
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
              event.preventDefault();
              $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
            }
          });
      });

    
}(jQuery);
//# sourceMappingURL=app.js.map
