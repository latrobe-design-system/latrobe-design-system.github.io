/**
 * Accordion
 *
 * TODO: add up/down and home/end keyboard controls https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
 */
jQuery(document).ready(function ($) {
    const _config = {
        name: 'accordion',
        selectors: {
            container: '.ds-accordion',
            children: {
                trigger: '.ds-accordion__trigger',
            }
        },
    }

    // show all default open accordions
    function openAccordionOnLoad(selector) {
        $(selector).each(function () {
            if ($(this).attr('aria-expanded') == 'true') {
                $(this).parent().next(".ds-accordion__content").show();
            }
        });
    }

    function clickHandler(event) {
        if ($(this).attr('aria-expanded') == 'true') {
            $(this).attr('aria-expanded', 'false');
        } else {
            $(this).attr('aria-expanded', 'true');
        }

        $(this).parent().next(".ds-accordion__content").slideToggle();
    }

    window.LTUDS.registerComponent(_config.name, {
        eventHandlers: {
            triggerOnClick: clickHandler,
        },
        helpers: {
            openAccordionOnLoad: openAccordionOnLoad
        },
        setup: (helper) => {
            const { getSelector } = helper

            const selector = getSelector(_config.selectors.container, 'trigger', _config.selectors)

            openAccordionOnLoad(selector)

            jQuery(document.body)
                .off('click', selector, clickHandler)
                .on('click', selector, clickHandler)
                ;
        },
    })

});
