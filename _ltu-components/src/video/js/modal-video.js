/**
 * YouTube modal video
 *
 * @requires: /ltu-components/src/modal/js/modal.js
 */
jQuery(document).ready(function ($) {
    const _config = {
        name: 'modal-video',
        selectors: {
            container: '',
            children: {
                trigger: 'a[data-youtube]',
            }
        },
    }

    function triggerOnClick(e) {
        e.preventDefault();

        // get object that was clicked
        var target = e.target;

        // get the youtube video id from the clicked play link
        var videoId = $(target).attr('data-youtube');

        // modal content
        var modalContent = '<div class="ds-video ds-video--fullwidth"><div class="ds-video__wrapper"><iframe id="vid-' + videoId + '" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/' + videoId + '?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>';

        // open modal with responsive video content
        LTUDS.components.modal.helpers.openModal(target, modalContent, 'medium');
    }

    window.LTUDS.registerComponent(_config.name, {
        eventHandlers: {
            triggerOnClick: triggerOnClick,
        },
        setup: (helper) => {
            const { getSelector } = helper

            const selector = getSelector(_config.selectors.container, 'trigger', _config.selectors)

            jQuery(document.body)
                .off('click', selector, triggerOnClick)
                .on('click', selector, triggerOnClick)
                ;
        },
    })

});
