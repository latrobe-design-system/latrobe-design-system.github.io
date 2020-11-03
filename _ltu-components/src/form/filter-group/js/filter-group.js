$(document).ready(function() {

    // expand control click handler for 
    $('.ds--filter-group__filter').click(function() {

        var regionId = $(this).attr('aria-controls');

        if ($(this).attr('aria-expanded') == 'false') { // region is collapsed

            // close any open siblings
            $(this).siblings().each(function() {
                var siblingRegionId = $(this).attr('aria-controls');
                // close siblings colapsible region
                $('#'+siblingRegionId).hide().attr('hidden','hidden');
                // update the aria-expanded attribute of the region
                $(this).attr('aria-expanded', 'false');
            });

            // update the aria-expanded attribute of the region
            $(this).attr('aria-expanded', 'true');
  
            // move focus to the region
            $('#'+regionId).slideDown(function(){
                $(this).removeAttr('hidden');
            });
  
        }
        else { // region is expanded
  
            // update the aria-expanded attribute of the region
            $(this).attr('aria-expanded', 'false');

            $('#'+regionId).slideUp(function(){
                $(this).attr('hidden','hidden');
            });

        }
    });

});