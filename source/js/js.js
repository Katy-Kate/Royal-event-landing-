//-----preloader-----
$(window).load(function() {
    setTimeout(function() {
        $('.preloader').fadeOut('slow', function() {});
    }, 2000);

});

$(document).ready()
{
   //-----mobilemenu-----
    $('.mobile-nav-button').on('click', function() {
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
    });
    //------Slider -------
    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
    $('.carousel').slick( );

     //----gallery -  START------------

    function openModal() {
        document.getElementById('myModal').style.display = "block";
    }

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        // captionText.innerHTML = dots[slideIndex-1].alt;
    }

    //----gallery -  AND------------

    //---------smooth transition
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html').animate({scrollTop: top}, 1500);
    });
     //---------appearance of content during page loading

        $('.headline').addClass("fade");
        $('.btn').addClass("fade");
        $('.plan').addClass("fade");
        $('.gallery_photoset').addClass("fade");
        $('input').addClass("fade");
        $('.social-networks_item').addClass("bounce-Right");


        $('.fade').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
            offset: 100
        });
        $('.bounce-Left').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
            offset: 100
        });
        $('.bounce-Right').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
            offset: 100
        });
        $('.bounce-Up').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
            offset: 100
        });

    //---------
};