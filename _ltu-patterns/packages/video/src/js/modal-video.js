---
javascript: true
---
/**
 * YouTube modal video
 *
 * @requires /ltu-patterns/modal/js/modal.js
 */
$('body').on('click', 'a[data-youtube]', function(e) {
    e.preventDefault();

    // get object that was clicked
    var target = e.target;

    // get the youtube video id from the clicked play link
    var videoId = $(target).attr('data-youtube');

    var modalContent = '<div class="ds-video"><iframe id="vid-'+videoId+'" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+videoId+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div>';

    openModal(target, modalContent);
});
