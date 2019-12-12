$( ".accordion-trigger" ).click(function() {
    $(this).toggleClass("active");

    if ($(this).attr('aria-expanded') == 'true') {
        $(this).attr( 'aria-expanded', 'false');
    } else {
        $(this).attr( 'aria-expanded', 'true');
    }

    $(this).next(".accordion-content").slideToggle( "active" );
});