/**
 * Click handler for image gallery - opens all images in a modal
 *
 * @requires /_ltu-components/src/modal/js/modal.js
 */
jQuery(document).ready(function ($) {
    const _config = {
        name: 'image-gallery',
        selectors: {
            container: '',
            children: {
                triggers: [
                    ['.ds-image-gallery', '.ds-image-gallery__image'],
                    ['.ds-image-gallery__more', 'button'],
                ],
            }
        },
    }

    function triggerOnClick(e) {
        e.preventDefault();

        var target = e.target; // element clicked

        var modalContent = $(this).parents('.ds-image-gallery').html();

        LTUDS.components.modal.helpers.openModal(target, modalContent, 'medium');
    }

    window.LTUDS.registerComponent(_config.name, {
        eventHandlers: {
            triggerOnClick: triggerOnClick,
        },
        setup: (helper) => {
            const { getSelector } = helper

            const selector = _config.selectors.children.triggers.map(function ([s1, s2]) {
                return getSelector(
                    s1,
                    'trigger',
                    { children: { trigger: s2 } }
                );
            }).join(', ')

            jQuery(document.body)
                .off('click', selector, triggerOnClick)
                .on('click', selector, triggerOnClick)
                ;
        },
    })

});
