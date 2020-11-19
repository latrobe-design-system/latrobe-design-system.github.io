/*** 
 * This script is purely for UI demonstrations purposes
 * This needs to be replaced with real producton code
 ***/

// filter behaviour
$(document).ready(function() {
    // handler for filter checkbox all control
    $('.ds-input-checkbox[data-all-control').on('click', function(){
        if($(this).prop("checked") == true) {
            var allControlName = $(this).attr('data-all-control');
            $('[data-all-parent="'+allControlName+'"]').each(function(){
                $(this).prop( "checked", false );
                // if child is also an all control
                if($(this).attr('data-all-control')) {
                    var allControlName = $(this).attr('data-all-control');
                    $('[data-all-parent="'+allControlName+'"]').prop( "checked", false );
                }
            });
        }
    });
    // handler for filter checkbox all children
    $('.ds-input-checkbox[data-all-parent]').on('click', function(){
        if($(this).prop("checked") == true) {
            var allParentName = $(this).attr('data-all-parent');
            $('[data-all-control="'+allParentName+'"]').each(function(){
                $(this).prop( "checked", false );
                // if parent is also a child
                if($(this).attr('data-all-parent')) {
                    var allParentName = $(this).attr('data-all-parent');
                    $('[data-all-control="'+allParentName+'"]').prop( "checked", false );
                }
            });
        }
    });

});