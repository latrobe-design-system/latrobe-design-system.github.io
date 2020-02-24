/**
 * Click handler for image gallery - opens all images in a modal
 *
 * @requires /_ltu-components/src/modal/js/modal.js
 */
jQuery(document).ready(function($) {
 	//do jQuery stuff when DOM is ready
    $('body').on('click', '.ds-image-gallery__image, .ds-image-gallery__more button', function(e) {
        e.preventDefault();
        var target = e.target;
        var modalContent = $(this).parents('.ds-image-gallery');
        modalContent = modalContent.html();
        openModal(target, modalContent);
    });
});
