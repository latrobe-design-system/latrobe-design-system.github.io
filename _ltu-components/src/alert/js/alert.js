/*
 * Alert dismissal
 * attaches listener to alert close buttons
 * removes alert from DOM if close button clicked
 */
jQuery(document).ready(function ($) {
    const _config = {
        name: 'alert',
        selectors: {
            container: '.ds-alert',
            children: {
                close: '.ds-alert__close',
            }
        },
    }

    function closeOnClick(event) {
        $(this).parent().remove();
    }

    window.LTUDS.registerComponent(_config.name, {
        eventHandlers: {
            closeOnClick: closeOnClick,
        },
        setup: (helper) => {
            const { getSelector } = helper

            const selector = getSelector(_config.selectors.container, 'close', _config.selectors)

            jQuery(document.body)
                .off('click', selector, closeOnClick)
                .on('click', selector, closeOnClick)
                ;
        },
    })

});
