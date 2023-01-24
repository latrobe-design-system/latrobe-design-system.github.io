jQuery(document).ready(function ($) {
    const _config = {
        name: 'collapse',
        selectors: {
            container: '',
            children: {
                trigger: '.ds-collapse__trigger',
            }
        },
    }

    function getSelectorPrefix(elem) {
        let selectorPrefix = ''

        if (!!elem.closest('.ds-modal')) {
            selectorPrefix = '.ds-modal '
        }

        return selectorPrefix;
    }

    function triggerOnClick(event) {
        const regionId = $(event.currentTarget).attr('aria-controls');
        const selectorPrefix = getSelectorPrefix(event.currentTarget)

        if ($(event.currentTarget).attr('aria-expanded') == 'false') { // region is collapsed then open it

            // update the aria-expanded attribute of the clicked trigger
            $(event.currentTarget).attr('aria-expanded', 'true');

            // open the region
            $(`${selectorPrefix}[id="${regionId}"]`).slideDown(function () {
                $(event.currentTarget).removeAttr('hidden');
            });

        } else { // region is expanded then close it

            // update the aria-expanded attribute of the clicked triiger
            $(event.currentTarget).attr('aria-expanded', 'false');

            // close the region
            $(`${selectorPrefix}[id="${regionId}"]`).slideUp(function () {
                $(event.currentTarget).attr('hidden', 'hidden');
            });
        }
    }

    window.LTUDS.registerComponent(_config.name, {
        eventHandlers: {
            triggerOnClick: triggerOnClick,
        },
        setup: (helper) => {
            const { getSelector } = helper

            const triggerSelector = getSelector(_config.selectors.container, 'trigger', _config.selectors)

            jQuery(document.body)
                .off('click', triggerSelector, triggerOnClick)
                .on('click', triggerSelector, triggerOnClick)
                ;
        },
    })
});