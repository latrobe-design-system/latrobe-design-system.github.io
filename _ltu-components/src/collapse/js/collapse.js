jQuery(document).ready(function ($) {
    const _config = {
        name: 'collapse',
        selectors: {
            container: '',
            children: {
                close: '.ds-collapse__close',
                trigger: '.ds-collapse__trigger',
            }
        },
    }

    function triggerOnClick(event) {
        var regionId = $(event.currentTarget).attr('aria-controls');

        if ($(event.currentTarget).attr('aria-expanded') == 'false') { // region is collapsed then open it

            // update the aria-expanded attribute of the clicked trigger
            $(event.currentTarget).attr('aria-expanded', 'true');

            // open the region
            $('#' + regionId).slideDown(function () {
                $(event.currentTarget).removeAttr('hidden');
            });

        }
        else { // region is expanded then close it

            // update the aria-expanded attribute of the clicked triiger
            $(event.currentTarget).attr('aria-expanded', 'false');

            // close the region
            $('#' + regionId).slideUp(function () {
                $(event.currentTarget).attr('hidden', 'hidden');
            });
        }
    }

    function closeOnClick(event) {
        var regionId = $(event.currentTarget).attr('aria-controls');
        $('[aria-controls="' + regionId + '"]').trigger('click').focus();
    }

    window.LTUDS.registerComponent(_config.name, {
        eventHandlers: {
            triggerOnClick: triggerOnClick,
            closeOnClick: closeOnClick,
        },
        setup: (helper) => {
            const { getSelector } = helper

            const closeSelector = getSelector(_config.selectors.container, 'close', _config.selectors)
            const triggerSelector = getSelector(_config.selectors.container, 'trigger', _config.selectors)

            jQuery(document.body)
                .off('click', closeSelector, closeOnClick)
                .on('click', closeSelector, closeOnClick)
                .off('click', triggerSelector, triggerOnClick)
                .on('click', triggerSelector, triggerOnClick)
                ;
        },
    })
});