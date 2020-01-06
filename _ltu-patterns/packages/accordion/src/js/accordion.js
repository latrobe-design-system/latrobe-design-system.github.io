$( ".accordion__trigger" ).click(function() {
    $(this).toggleClass("accordion__trigger--active");

    if ($(this).attr('aria-expanded') == 'true') {
        $(this).attr( 'aria-expanded', 'false');
    } else {
        $(this).attr( 'aria-expanded', 'true');
    }

    $(this).next(".accordion__content").slideToggle( "accordion__trigger--active" );
});