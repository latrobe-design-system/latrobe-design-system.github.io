/*** 
 * THIS IS NOT PRODUCTION CODE
 * 
 * This script is purely for UI demonstrations purposes!
 * 
 ***/

// filter behaviour
$(document).ready(function() {

    // handler for checkbox filter all change
    $('.ds-input-checkbox[data-all-control]').on('change', function(){

        // disable all filter tabs (until apply button clicked)
        $('.ds-filter-group__nav__tab').attr('disabled', 'disabled');

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

    // handler for checkbox filter change
    $('.ds-input-checkbox[data-all-parent]').on('change', function(){

        // disable all filter tabs (until apply button clicked)
        $('.ds-filter-group__nav__tab').attr('disabled', 'disabled');

        var allParentName = $(this).attr('data-all-parent');

        // if checked
        if($(this).prop("checked") == true) {

            // if all children in group are now checked
            if($('.ds-input-checkbox[data-all-parent="'+$(this).attr('data-all-parent')+'"]:checked').length == $('.ds-input-checkbox[data-all-parent="'+$(this).attr('data-all-parent')+'"]').length) {
                // uncheck all children
                $('.ds-input-checkbox[data-all-parent="'+$(this).attr('data-all-parent')+'"]').prop( "checked", false );
                // check all parent
                $('[data-all-control="'+$(this).attr('data-all-parent')+'"]').prop( "checked", true );
            } 
            else {
                // uncheck all parent
                $('[data-all-control="'+allParentName+'"]').prop( "checked", false );
                // if parent is also child uncheck its all parent
                var parentsAllParent = $('[data-all-control="'+allParentName+'"]').attr( 'data-all-parent' );
                if (parentsAllParent.length != 0) {
                    $('[data-all-control="'+parentsAllParent+'"]').prop( "checked", false );
                }
            }
        } 
        // else all children unchecked
        else if($(this).closest('.ds-filter-group__filter').find('.ds-input-checkbox[data-all-parent]:checked').length == 0) {
            // check all parent
            $('[data-all-control='+$(this).attr('data-all-parent')+']').prop( "checked", true );
        }
        
    });

    // handler for ATAR filter change
    $('#atar').on('change', function(){

        // disable all filter tabs (until apply button clicked)
        $('.ds-filter-group__nav__tab').attr('disabled', 'disabled');

    });


    // handler for filter form submit
    $('.ds-filter-group__filter').on('submit', function(event){

        event.preventDefault();

        var filterTriggerButtonId = $(this).parent().attr('aria-labelledby'); // get tab button id
        var atarDefaultValue = $('#atar').attr('value'); // default atar value
        var atarValue = $('#atar').val(); // get set atarValue filter value

        if ($(this).attr('id') == '#ATAR-filter') { // if atar filter form

            atarValue = $('#atar').val();

            // if atar is reset
            if(atarValue == atarDefaultValue) {
                alert(atarValue);
                // remove selected class from filter drop down button 
                $('#'+filterTriggerButtonId).removeClass('ds-filter-group__nav__tab--selected');
            } else {
                // add selected class to filter drop down button
                $('#'+filterTriggerButtonId).addClass('ds-filter-group__nav__tab--selected');
            }

        } else { // other filter forms

            // if the all checkbox is selected
            if ($(this).find('[data-all-control]').prop("checked") == true) {
                // remove selected class from filter drop down button 
                $('#'+filterTriggerButtonId).removeClass('ds-filter-group__nav__tab--selected');
            } else {
                // add selected class to filter drop down button
                $('#'+filterTriggerButtonId).addClass('ds-filter-group__nav__tab--selected');
            }
        
        }

        /*** reset tags ***/
        $('#filter-tags').empty();
        // add tags for checkboxes
        $('.ds-filter-group__filter:not(#ATAR-filter)').each(function(){
            $(this).find('.ds-input-checkbox').each(function(){
                
                // check not top level all control by checking that it doesn't have attr data-all-parent 
                var attrCheck = $(this).attr('data-all-parent');
                if (typeof attrCheck !== typeof undefined && attrCheck !== false) {
                    // if checked add a tag 
                    if ($(this).prop("checked") == true) {
                        var thisID = $(this).attr('id');
                        var label = $('label[for='+thisID+']').text();
                        $('#filter-tags').append('<button class="ds-tag ds-tag--green" title="remove filter" data-filter-id="'+thisID+'">'+label+'</button>\n');
                    }
                }
            });
        });
        // add tag for ATAR if not original value
        if(atarValue != atarDefaultValue) {
            $('#filter-tags').append('<button class="ds-tag ds-tag--green" title="remove filter" data-filter-id="atar">ATAR: '+atarValue+'</button>\n');
        }



        // enable filter tabs
        $('.ds-filter-group__nav__tab').removeAttr('disabled');

        // close filter
        if($('#'+filterTriggerButtonId).attr('aria-expanded') == "true") {
            $('#'+filterTriggerButtonId).trigger('click');
        }

        // simulate results refresh
        $('#course-search-results').fadeOut().fadeIn();
    });


    
    //handle tag click
    $('#filter-tags').on('click', '.ds-tag', function(){
        // get correspoding filter id from button attribute data-filter-id
        var filterId = $(this).attr('data-filter-id');

        if ($(this).attr('data-filter-id') != 'atar') { // if checkbox filter
            // trigger correspoding filter click
            $('#'+filterId).prop("checked",false).trigger("change").promise().done(function(){
                // trigger correspoding filters parent form submit
                $(this).closest('.ds-filter-group__filter').trigger('submit');
            });
        } else {
            $('#atar-value-clear').trigger('click').promise().done(function(){
                // trigger correspoding filters parent form submit
                $(this).closest('.ds-filter-group__filter').trigger('submit');
            });
        }

    });

    // handler for course search
    $('#course-search').on('submit', function(event){

        event.preventDefault();

        var query = $('#query_courses').val();
        $('#query_courses').val('');
        $(this).find('#query-tag-container').empty().append('<button type="button" class="ds-tag" title="remove filter" id="query-tag">'+query+'</button>');

        // simulate results refresh
        $('#course-search-results').fadeOut().fadeIn();
    });

    // handler for query-tag

    $('#query-tag-container').on('click', '#query-tag', function(){
        $(this).remove();

        // simulate results refresh
        $('#course-search-results').fadeOut().fadeIn();
    });

});