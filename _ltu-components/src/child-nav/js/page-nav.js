/**
 * Page nav - add remove stuck modifier class for additional styling when stuck
 */
 
 $(document).ready(function() {

    function toggleStuckClass() {
        var actualOffset =  $('.ds-page-nav-container').offset().top - $(window).scrollTop();
        if ($(window).width() >= 1024){ 
            // if at top
            if(actualOffset == stickyOffset) {
                $('.ds-page-nav-container').addClass('ds-page-nav-container--stuck');
            }
            else {
                $('.ds-page-nav-container').removeClass('ds-page-nav-container--stuck');
            }
        } else {
            $('.ds-page-nav-container').removeClass('ds-page-nav-container--stuck');
        }
    }
     
    /*** stick nav below site header on scroll ***/
    // check if exists on page otherwise window scroll function will report error
    if($('.ds-page-nav-container').length > 0){   

        // get sticky top offset on load
        var stickyOffset = parseInt($('.ds-page-nav-container').css('top'), 10);

        // toggle stuck class on load
        toggleStuckClass();

        // toggle stuck class on scroll
        $(window).scroll(function() {
            toggleStuckClass();
        });

        // reset sticky on resize
        $(window).on("resize", function() {
            stickyOffset = parseInt($('.ds-page-nav-container').css('top'), 10);
            toggleStuckClass();
        });

    }

});