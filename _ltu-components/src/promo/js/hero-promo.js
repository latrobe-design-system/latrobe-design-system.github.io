$(document).ready(function() {

    var viewportWidth = $( window ).width();
    var windowScrolltop = $(this).scrollTop();
    var promoTextOffset = $( '.ds-hero-promo__text').offset().top;

    // disappear header logo when promo used
    if( viewportWidth > 1023 ) { 
        if( windowScrolltop > promoTextOffset ) {
            $( '#logo h1 img' ).css( 'transform', 'translateY(0)' );
        } else {
            $( '#logo h1 img' ).css( 'transform', 'translateY(-100%)' );
        }
    }

    // reappear header logo when scroll past promo text
    $( window ).scroll(function() {
        windowScrolltop = $(this).scrollTop();

        if( viewportWidth > 1023 ) {
            if( windowScrolltop > promoTextOffset ) {
                $( '#logo h1 img' ).css( 'transform', 'translateY(0)' );
            } else {
                $( '#logo h1 img' ).css( 'transform', 'translateY(-100%)' );
            }
        }
    });

    // disaapear or reappear on window resize
    $( window ).resize(function() {
        viewportWidth = $( window ).width();
        if( viewportWidth > 1023 ) {
            if( windowScrolltop > promoTextOffset ) {
                $( '#logo h1 img' ).css( 'transform', 'translateY(0)' );
            } else {
                $( '#logo h1 img' ).css( 'transform', 'translateY(-100%)' );
            }
        } else {
            $( '#logo h1 img' ).css( 'transform', 'translateY(0)' );
        }
    });

    

});