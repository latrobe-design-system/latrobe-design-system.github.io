$(document).ready(function() {

    // expand control click handler for 
    $('.ds-collapse__trigger').click(function() {

      var regionId = $(this).attr('aria-controls');

      if ($(this).attr('aria-expanded') == 'false') { // region is collapsed then open it

          // update the aria-expanded attribute of the clicked trigger
          $(this).attr('aria-expanded', 'true');
  
          // open the region
          $('#'+regionId).slideDown(function(){
            $(this).removeAttr('hidden');
          });
  
        }
        else { // region is expanded then close it
  
          // update the aria-expanded attribute of the clicked triiger
          $(this).attr('aria-expanded', 'false');

          // close the region
          $('#'+regionId).slideUp(function(){
            $(this).attr('hidden','hidden');
          });

        }
    });

    // internal close button click handler
    $('.ds-collapse__close').click(function() {
      
      var regionId = $(this).attr('aria-controls');
      $('.ds-collapse[aria-controls="'+regionId+'"]').trigger('click').focus();

    });

});