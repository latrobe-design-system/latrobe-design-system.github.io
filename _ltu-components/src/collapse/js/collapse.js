$(document).ready(function() {

    // expand control click handler for 
    $('.ds-collapse__trigger').click(function() {

      var regionId = $(this).attr('aria-controls');

      if ($(this).attr('aria-expanded') == 'false') { // region is collapsed

          // update the aria-expanded attribute of the region
          $(this).attr('aria-expanded', 'true');
  
          // move focus to the region
          
          $('#'+regionId).slideDown(function(){
            $(this).removeAttr('hidden');
          });
  
          // update the button label
          //thisObj.$id.find('span').html('Hide');
  
        }
        else { // region is expanded
  
          // update the aria-expanded attribute of the region
          $(this).attr('aria-expanded', 'false');

          $('#'+regionId).slideUp(function(){
            $(this).attr('hidden','hidden');
          });
  
          // update the button label
          //thisObj.$id.find('span').html('Show');
        }
    });

    // internal close button click handler
    $('.ds-collapse__close').click(function() {
      
      var regionId = $(this).attr('aria-controls');
      $('.ds-collapse[aria-controls="'+regionId+'"]').trigger('click').focus();

    });

});