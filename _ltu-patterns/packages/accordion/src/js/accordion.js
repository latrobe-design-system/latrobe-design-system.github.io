$( ".accordion-trigger" ).click(function() {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle( "active" );
});