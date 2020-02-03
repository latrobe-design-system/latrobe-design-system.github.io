---
javascript: true
---
$('body').on('click', '.ds-image-gallery__image, .ds-image-gallery__more button', function(e) {
    e.preventDefault();
    var target = e.target;
    var modalContent = $(this).parents('.ds-image-gallery');
    modalContent = modalContent.html();
    openModal(target, modalContent);
});
