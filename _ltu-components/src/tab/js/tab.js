---
javascript: true
---
/**
 * Tabs
 */
jQuery(document).ready(function($) {
    //do jQuery stuff when DOM is ready
    $('.ds-tabs-nav li:first-child').addClass('active');
    $('.ds-tab-content__body').hide();
    $('.ds-tab-content__body:first').show();

    // click function
    $('.ds-tabs-nav__tab').click(function(){
        $('.ds-tabs-nav__tab').removeClass('active');
        $(this).addClass('active');
        $('.ds-tab-content__body').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});
