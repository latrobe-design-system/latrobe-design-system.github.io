/**
 * Accordion
 *
 * TODO: add up/down and home/end keyboard controls https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
 */
jQuery(document).ready(function($) {
 	//do jQuery stuff when DOM is ready

    // show all default open accordions
    $( ".ds-accordion__trigger" ).each(function() {
        if($(this).attr('aria-expanded') == 'true') {
            $(this).parent().next(".ds-accordion__content").show();
        }
    });

    // click handler for accordions
    $( ".ds-accordion__trigger" ).click(function() {

        if ($(this).attr('aria-expanded') == 'true') {
            $(this).attr( 'aria-expanded', 'false');
        } else {
            $(this).attr( 'aria-expanded', 'true');
        }

        $(this).parent().next(".ds-accordion__content").slideToggle();
    });
});
