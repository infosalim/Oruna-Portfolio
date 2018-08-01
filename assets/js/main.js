(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // mixitup
        $('.container').imagesLoaded(function () {
            var containerEl = document.querySelector('#Container');
            var mixer = mixitup(containerEl);
        });

        // active button
        $('ul#mix-nav li').click(function () {
            if ($(this).hasClass('active-btn')) {
                $(this).removeClass('active-btn');
            } else {
                $(this).addClass('active-btn');
                $(this).siblings().removeClass('active-btn');
            }
        });

        // owl carousel
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
        // for video
        // $('.owl-carousel').owlCarousel({
        //     items: 1,
        //     loop:true,
        //     nav:true,
        //     responsiveRefreshRate: 200,
        //     dots: true,
        //     autoplay: true,
        //     slideSpeed: 4000
        // })

        // // parallax carousel
        // $(window).scroll(function () {
        //     //parallax
        //     parallax();

        //     function parallax() {
        //         var wScroll = $(window).scrollTop();

        //         $(".parallax-carousel").css("background-position", "center " + (wScroll * -.3) + "px");
        //     }
        // });

        //scrollspy
        var headerHeight = $(".oruna-header").outerHeight();
        var scrollLink = $(".spy-btn");

        //smoothScroll
        scrollLink.click(function (e) {
            e.preventDefault();


            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 1500);
        });

        $(window).scroll(function () {
            //scrollspy active link switching
            var scrollbarLocation = $(this).scrollTop();
            scrollLink.each(function () {
                var sectionOffset = $(this.hash).offset().top - 20;
                if (sectionOffset <= scrollbarLocation) {
                    $(this).addClass("active");
                    $(this).parent().siblings().find("a").removeClass("active");
                }
            });
        });

        //slick nav
        $("ul#navbar").slicknav({
            prependTo: ".responsive-menu-wrap"
        });

    });

}(jQuery));