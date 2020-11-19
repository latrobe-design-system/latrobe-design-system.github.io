/**
 * Page nav
 *
 */

 // add class to 
 $(document).ready(function() {

    var stickyOffset = $('.ds-page-nav-container').css('top');
    stickyOffset = parseInt(stickyOffset, 10);
    console.log(stickyOffset);

    $(window).scroll(function() {
        var actualOffset =  $('.ds-page-nav-container').offset().top - $(window).scrollTop();
        console.log(actualOffset);
        if(actualOffset == stickyOffset) {
            $('.ds-page-nav-container').addClass('ds-page-nav-container--stuck');
        }
        else {
            $('.ds-page-nav-container').removeClass('ds-page-nav-container--stuck');
        }
    });
});