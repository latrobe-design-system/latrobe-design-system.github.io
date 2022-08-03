$(document).ready(function() {

  // expand control click handler for 
  jQuery(document).on('click', '.ds-collapse__trigger', function(event) {
          var regionId = $(event.currentTarget).attr('aria-controls');
    
          if ($(event.currentTarget).attr('aria-expanded') == 'false') { // region is collapsed then open it
    
              // update the aria-expanded attribute of the clicked trigger
              $(event.currentTarget).attr('aria-expanded', 'true');
      
              // open the region
              $('#'+regionId).slideDown(function(){
                $(event.currentTarget).removeAttr('hidden');
              });
      
            }
            else { // region is expanded then close it
      
              // update the aria-expanded attribute of the clicked triiger
              $(event.currentTarget).attr('aria-expanded', 'false');
    
              // close the region
              $('#'+regionId).slideUp(function(){
                $(event.currentTarget).attr('hidden','hidden');
              });   
            }
  });


  // internal close button click handler
    jQuery(document).on('click', '.ds-collapse__close', function(event) {
    var regionId = $(event.currentTarget).attr('aria-controls');
    $('.ds-collapse[aria-controls="'+regionId+'"]').trigger('click').focus();

  });

});