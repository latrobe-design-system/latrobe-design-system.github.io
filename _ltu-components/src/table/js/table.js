/**
 * Wrap tables in scroll box for repsonsive layout
 * This is required for Squiz wysiwyg tables
 */
jQuery(document).ready(function() {
 	//do jQuery stuff when DOM is ready
    $( 'table' ).each(function() {
        if(!$( this ).parent().hasClass( 'ds-table-wrapper' )) {
            $( this ).wrap( '<div class="ds-table-wrapper"></div>' );
        }
    });
});
