
/**
 * Accordion
 */
jQuery(document).ready(function($) {
 	//do jQuery stuff when DOM is ready
    $( ".ds-accordion__trigger" ).click(function() {
        $(this).toggleClass("ds-accordion__trigger--active");

        if ($(this).attr('aria-expanded') == 'true') {
            $(this).attr( 'aria-expanded', 'false');
        } else {
            $(this).attr( 'aria-expanded', 'true');
        }

        $(this).next(".ds-accordion__content").slideToggle( "ds-accordion__trigger--active" );
    });
});

/**
 * Click handler for image gallery - opens all images in a modal
 *
 * @requires /_ltu-components/src/modal/js/modal.js
 */
jQuery(document).ready(function($) {
 	//do jQuery stuff when DOM is ready
    $('body').on('click', '.ds-image-gallery__image, .ds-image-gallery__more button', function(e) {
        e.preventDefault();
        var target = e.target;
        var modalContent = $(this).parents('.ds-image-gallery');
        modalContent = modalContent.html();
        openModal(target, modalContent);
    });
});

/**
 * Smooth scroll for jump links
 */
jQuery(document).ready(function($) {
    //do jQuery stuff when DOM is ready
    $('a.scroll-link[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // adjust scroll offset for sticky or fixed header
        var headerHeight = 0;
        var headerPosition = $('header').css('position');
        if (headerPosition == ('sticky' || 'fixed')) {
            var headerHeight = $('header').outerHeight();
        }
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                var scrollPosition = target.offset().top - headerHeight;
                $('html, body').animate({
                    scrollTop: scrollPosition
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
});

/**
 *  Modal
 *  @param: target - element clicked to open modal.
 *  @param: content - content to show in modal
 *  @param: maxWidth - sets a max width for the modal
 */

 function openModal(target, content, maxWidth='1280px'){
     // add an attribute to the clicked link to enable return of focus on overlay close
     $(target).attr('data-returnfocus', 'yes');
     // create overlay
     var dialog = '<div role="dialog" aria-modal="true" class="overlay"><div class="ds-modal">'+content+'</div><button id="overlay-close" class="ds-btn--round-light icon-x">Close</button></div>';
     // append overlay to page and add overlay-open class to body to stop scroll
     $('body').append(dialog).addClass('overlay-open');
     // set max width of modal
     $('.ds-modal').css('max-width', maxWidth);
     // fade in overlay change focus to overlay close button
     $('.overlay[role="dialog"]').fadeIn(function(){
         //$('#overlay-close').focus();
         // find first focusable element and set focus
         $(this).find('button:visible, [href]:visible, input:visible, select:visible, textarea:visible, [tabindex]:not([tabindex="-1"]):visible').eq(0).focus();
     });
 }

 jQuery(document).ready(function($) {
  	//do jQuery stuff when DOM is ready

    /**
     *  Click handler for modal close button
     */
    $('body').on('click keydown', '#overlay-close, .overlay[role="dialog"]', function(event) {
        // find clicked play link
        var returnFocusLink = '[data-returnfocus="yes"]';
        if (event.keyCode === undefined || event.keyCode == 13 || event.keyCode == 27) {
            // undefined for click, 13 for enter key, 27 for esc key
            event.preventDefault();
            $('.overlay[role="dialog"]').fadeOut(function(){
                // delete video iframe to stop playing
                $('.overlay[role="dialog"]').remove();
                // return focus to clicked play link and remove identifying attribute
                $(returnFocusLink).focus().removeAttr('data-returnfocus');
                // return scroll to body
                $('body').removeClass('overlay-open');
            });
        }
    });

    /**
     *  Click handler for standard modal
     */
    $('body').on('click', '[data-modal-content]', function(e) {
        // prevent default click action
        e.preventDefault();

        // get object that was clicked
        var target = e.target;

        // get the modal content id from the clicked button
        var modalContentId = $(target).attr('data-modal-content');

        // get requested modal width
        var modalWidth = $(target).attr('data-modal-width');
        if (modalWidth == "medium") {
            maxWidth = "1024px";
        } else if (modalWidth == "large") {
            maxWidth = "1280px";
        } else {
            maxWidth = "800px";
        }

        //create the modal
        var modalContent = $('<div/>').append($('#'+modalContentId).clone()).html();

        // show the modal
        openModal(target, modalContent, maxWidth);
    });
});

/**
 * Tabs
 */
jQuery(document).ready(function($) {
    //do jQuery stuff when DOM is ready
    $('.ds-tabs-nav li:first-child').addClass('active');
    $('.ds-tab-content__body').hide();
    $('.ds-tab-content__body:first').show();

    // click function
    $('.ds-tabs-nav__tab').click(function(){
        $('.ds-tabs-nav__tab').removeClass('active');
        $(this).addClass('active');
        $('.ds-tab-content__body').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});

/**
 * YouTube modal video
 *
 * @requires: /ltu-components/src/modal/js/modal.js
 */
jQuery(document).ready(function($) {
     //do jQuery stuff when DOM is ready
    $('body').on('click', 'a[data-youtube]', function(e) {
        e.preventDefault();

        // get object that was clicked
        var target = e.target;

        // get the youtube video id from the clicked play link
        var videoId = $(target).attr('data-youtube');

        var modalContent = '<div class="ds-video"><iframe id="vid-'+videoId+'" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div>';

        openModal(target, modalContent);
    });
});



