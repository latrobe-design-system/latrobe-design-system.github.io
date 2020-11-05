$(document).ready(function() {

    // expand control click handler for 
    $('.ds--filter-group__filter').click(function() {

        var regionId = $(this).attr('aria-controls');

        if ($(this).attr('aria-expanded') == 'false') { // region is collapsed then open it

            // close any open siblings
            $(this).siblings().each(function() {
                var siblingRegionId = $(this).attr('aria-controls');

                // close siblings colapsible region
                $('#'+siblingRegionId).hide().attr('hidden','hidden');

                // update the aria-expanded attribute of the siblings trigger
                $(this).attr('aria-expanded', 'false');
            });

            // update the aria-expanded attribute of the clicked trigger
            $(this).attr('aria-expanded', 'true');
  
            // open region
            $('#'+regionId).slideDown(function(){
                $(this).removeAttr('hidden');
            });
  
        }
        else { // region is expanded then close it
  
            // update the aria-expanded attribute of the region
            $(this).attr('aria-expanded', 'false');

            // close region
            $('#'+regionId).slideUp(function(){
                $(this).attr('hidden','hidden');
            });

        }
    });

});