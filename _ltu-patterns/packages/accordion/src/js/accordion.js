---
javascript: true
---
/**
 * Accordion
 */
$( ".ds-accordion__trigger" ).click(function() {
    $(this).toggleClass("ds-accordion__trigger--active");

    if ($(this).attr('aria-expanded') == 'true') {
        $(this).attr( 'aria-expanded', 'false');
    } else {
        $(this).attr( 'aria-expanded', 'true');
    }

    $(this).next(".ds-accordion__content").slideToggle( "ds-accordion__trigger--active" );
});
