---
javascript: true
---
/**
 *  Modal
 *  @param: target - element clicked to open modal.
 *  @param: content - content to show in modal
 */
function openModal(target, content){
    // add an attribute to the clicked link to enable return of focus on overlay close
    $(target).attr('data-returnfocus', 'yes');
    // create overlay
    var dialog = '<div role="dialog" aria-modal="true" class="overlay"><button id="overlay-close" class="ds-btn--round-light icon-x">Close</button><div class="ds-modal">'+content+'</div></div>';
    // append overlay to page and add overlay-open class to body to stop scroll
    $('body').append(dialog).addClass('overlay-open');
    // fade in overlay change focus to overlay close button
    $('.overlay[role="dialog"]').fadeIn(function(){
        $('#overlay-close').focus();
    });
}
// handler for modal close button
$('body').on('click keydown', '#overlay-close, .overlay[role="dialog"]', function(event) {
    // find clicked play link
    var returnFocusLink = 'a[data-returnfocus="yes"]';
    if (event.keyCode === undefined || event.keyCode == 13 || event.keyCode == 27) {
        // undefined for click, 13 for enter key, 27 for esc key
        event.preventDefault();
        $('.overlay[role="dialog"]').fadeOut(function(){
            // delete video iframe to stop playing
            $('.overlay[role="dialog"]').remove();
            // return focus to clicked play link and remove identifying attribute
            $(returnFocusLink).focus().removeAttr('data-returnfocus');
            // return scroll to body
            $('body').removeClass('overlay-open');
        });
    }
});

/**
 * YouTube modal video
 */
$('body').on('click', 'a[data-youtube]', function(e) {
    e.preventDefault();
    var target = e.target;
    // get the youtube video id from the clicked play link
    var videoId = $(target).attr('data-youtube');
    var modalContent = '<div class="ds-video"><iframe id="vid-'+videoId+'" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
    openModal(target, modalContent);
});
