$(window).load(function () {

    "use strict";

    /*---------------------------------------*/
    /*	WOW FOR ANIMATION ON SCROLL
	/*---------------------------------------*/
    var wow = new WOW({
        mobile: false
    });
    wow.init();

    /*---------------------------------------*/
    /*	NAVIGATION
	/*---------------------------------------*/
    $('.main-navigation').onePageNav({
        changeHash: false,
        currentClass: 'current', /* CHANGE THE VALUE TO 'current' TO HIGHLIGHT CURRENT SECTION LINK IN NAV*/
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: 'swing',
    });

    /*---------------------------------------*/
    /*	STELLAR FOR BACKGROUND SCROLLING
	/*---------------------------------------*/
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (!isMobile.any()) {
        $(window).stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }
    
    /*---------------------------------------*/
    /*	CHANGE PUZZLE IMAGE ON MOBILE
	/*---------------------------------------*/
    if ($(window).innerWidth() < 975) {
        $('img.swap').attr('src', 'images/services_mobile.png');
    };
    $(window).resize(function() {
        if ($(window).innerWidth() < 975) {
            $('img.swap').attr('src', 'images/services_mobile.png');
        }else
        {
            $('img.swap').attr('src', 'images/services.png');
        }
    });
});


$(window).resize(function () {

    "use strict";

    var ww = $(window).width();

    /* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK */
    if (ww < 480) {
        $('.sticky-navigation a').on('click', function () {
            $(".navbar-toggle").click();
        });
    }
});

(function ($) {

    "use strict";

    /*---------------------------------------*/
    /*	CONTACT FORM
	/*---------------------------------------*/

    $("#contact-form").submit(function (e) {
        e.preventDefault();
        var name = $("#cf-name").val();
        var email = $("#cf-email").val();
        var subject = $("#cf-subject").val();
        var message = $("#cf-message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: dataString,
                success: function () {
                    $('.email-success').fadeIn(1000);
                    $('.email-error').fadeOut(500);
                }
            });
        } else {
            $('.email-error').fadeIn(1000);
            $('.email-success').fadeOut(500);
        }
        return false;
    });


    /*---------------------------------------*/
    /*	SMOOTH SCROLL FRO INTERNAL #HASH LINKS
	/*---------------------------------------*/

    $('a[href^="#"].inpage-scroll, .inpage-scroll a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        $('.main-navigation a[href="' + target + '"]').addClass('active');
        $('.main-navigation a:not([href="' + target + '"])').removeClass('active');
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 3000, 'swing', function () {
            window.location.hash = target;
        });
    });


    /*---------------------------------------*/
    /*	NAVIGATION AND NAVIGATION VISIBLE ON SCROLL
	/*---------------------------------------*/

    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.appear-on-scroll').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.appear-on-scroll').stop().animate({
            "top": '-70',
            "opacity": '0'
        });

        /* if (top > 95) {
        $('.js-login').fadeOut(20);
        }
        else {
        $('.js-login').fadeIn(200);
            
        }
        
        if (top > 200) {
        $('.js-register').fadeIn(200);
        }
        else {
        $('.js-register').fadeOut(200);
            
        } */
    }


    


    /*---------------------------------------*/
    /*	TEXT ROTATOR
	/*---------------------------------------*/
    $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        //separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 5000 // How many milliseconds until the next word show.
    });

    /*---------------------------------------*/
    /*	PLACEHOLDER FIX
	/*---------------------------------------*/
    //CREATE PLACEHOLDER FUNCTIONALITY IN IE
    $('[placeholder]').focus(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function () {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();

    //ENSURE PLACEHOLDER TEEXT IS NOT SUBMITTED AS POST
    $('[placeholder]').parents('form').submit(function () {
        $(this).find('[placeholder]').each(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });

    /*---------------------------------------*/
    /*	BOOTSTRAP FIXES
	/*---------------------------------------*/

    var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
    $.fn.modal.Constructor.prototype.setScrollbar = function () {
        oldSSB.apply(this);
        if (this.scrollbarWidth) $('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);
    }

    var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
    $.fn.modal.Constructor.prototype.resetScrollbar = function () {
        oldRSB.apply(this);
        $('.navbar-fixed-top').css('padding-right', '');
    }

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }



})(jQuery);



/*---------------------------------------*/
/*	GOOGLE MAP
/*---------------------------------------*/
//jQuery(document).ready(function ($) {

//    "use strict";
//    //set your google maps parameters
//    var $latitude = 47.5429522, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
//        $longitude = 7.5754057,
//        $map_zoom = 16; /* ZOOM SETTING */

//    //google map custom marker icon - .png fallback for IE11
//    var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
//    var $marker_url = (is_internetExplorer11) ? 'images/map-marker.png' : 'images/map-marker.svg';

//    //we define here the style of the map
//    var style = [{
//        "stylers": [{
//            "hue": "#00aaff"
//        }, {
//            "saturation": -100
//        }, {
//            "gamma": 2.15
//        }, {
//            "lightness": 12
//        }]
//    }];

//    //set google map options
//    var map_options = {
//        center: new google.maps.LatLng($latitude, $longitude),
//        zoom: $map_zoom,
//        panControl: true,
//        zoomControl: true,
//        mapTypeControl: false,
//        streetViewControl: true,
//        mapTypeId: google.maps.MapTypeId.ROADMAP,
//        scrollwheel: false,
//        styles: style,
//    }
//    //inizialize the map
//    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
//    //add a custom marker to the map				
//    var marker = new google.maps.Marker({
//        position: new google.maps.LatLng($latitude, $longitude),
//        map: map,
//        visible: true,
//        icon: $marker_url,
//    });


//});

jQuery(document).ready(function ($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 150,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration
		);
    });

});