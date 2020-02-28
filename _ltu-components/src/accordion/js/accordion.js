/**
 * Accordion
 *
 * TODO: add up/down and home/end keyboard controls https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
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

        $(this).parent().next(".ds-accordion__content").slideToggle( "ds-accordion__trigger--active" );
    });
});
