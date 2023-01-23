/*
 *  Adapted from:
 *  https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
 */

jQuery(document).ready(function ($) {
    const _config = {
        name: 'tab',
        selectors: {
            container: '.ds-tabs',
            children: {
                navTab: '.ds-tabs-nav__tab',
            }
        },
    }

    // For easy reference
    var keys = {
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        delete: 46,
        enter: 13,
        space: 32
    };

    // Add or subtract depending on key pressed
    var direction = {
        37: -1,
        38: -1,
        39: 1,
        40: 1
    };

    function clickHandler() {
        var tabButton = $(this);
        _activateTab(tabButton, false);
    }

    function keyDownHandler(event) {
        var key = event.keyCode;
        var tabButton = $(this);
        var tablist = tabButton.parent();

        switch (key) {
            case keys.end:
                event.preventDefault();
                // Activate last tab
                _focusLastTab($(tablist).children());
                break;
            case keys.home:
                event.preventDefault();
                // Activate first tab
                _focusFirstTab($(tablist).children());
                break;

            // Up and down are in keydown
            // because we need to prevent page scroll >:)
            case keys.up:
            case keys.down:
                _determineOrientation(tablist, tabButton, event);
                break;
        };
    }

    function keyUpHandler(event) {
        var key = event.keyCode;
        var tabButton = $(this);
        var tablist = tabButton.parent();

        switch (key) {
            case keys.left:
            case keys.right:
                _determineOrientation(tablist, tabButton, event);
                break;
            case keys.enter:
            case keys.space:
                _activateTab(tabButton);
                break;
        };
    }

    // When a tablists aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    function _determineOrientation(tablist, tabButton, event) {
        var key = event.keyCode;
        var vertical = tablist.attr('aria-orientation') == 'vertical';
        var proceed = false;

        if (vertical) {
            if (key === keys.up || key === keys.down) {
                event.preventDefault();
                proceed = true;
            };
        }
        else {
            if (key === keys.left || key === keys.right) {
                proceed = true;
            };
        };

        if (proceed) {
            _switchTabOnArrowPress(tablist, tabButton, event);
        };
    };

    // Either focus the next, previous, first, or last tab
    // depending on key pressed
    function _switchTabOnArrowPress(tablist, tabButton, event) {
        var pressed = event.keyCode;
        var tabs = $(tablist).children();
        var tabButtonIndex = tabs.index(tabButton);

        if (direction[pressed]) {
            var target = event.target;

            if (tabButtonIndex !== undefined) {
                if (tabs[tabButtonIndex + direction[pressed]]) {
                    tabs[tabButtonIndex + direction[pressed]].focus();
                }
                else if (pressed === keys.left || pressed === keys.up) {
                    _focusLastTab(tabs);
                }
                else if (pressed === keys.right || pressed == keys.down) {
                    _focusFirstTab(tabs);
                };
            };
        };
    };

    // Activates any given tab panel
    function _activateTab(tabButton, setFocus) {
        setFocus = setFocus || true;

        // id of button
        var tabButtonId = tabButton.attr('id');
        // id of tab button controls
        var tab = $('[aria-labelledby="' + tabButtonId + '"]');

        // Deactivate all tabs
        _deactivateTabs(tabButton, tab);

        // Remove tabindex attribute
        tabButton.removeAttr('tabindex');

        // Set the tab as selected
        tabButton.attr('aria-selected', 'true');

        // Remove hidden attribute from tab panel to make it visible
        tab.removeAttr('hidden');

        // Set focus when required
        if (setFocus) {
            tabButton.focus();
        };
    };

    // Deactivate all tabs and tab panels
    function _deactivateTabs(tabButton, tab) {

        // set tab button and sibling buttons to unselected state
        tabButton.attr('tabindex', '-1').siblings('[role="tab"]').attr('tabindex', '-1');
        tabButton.attr('aria-selected', 'false').siblings('.ds-tabs-nav__tab').attr('aria-selected', 'false');

        // set tab and sibling tabs to unselected state
        tab.attr('hidden', 'hidden').siblings('[role="tabpanel"]').attr('hidden', 'hidden');

    };

    // focus firts tab
    function _focusFirstTab(tabs) {
        tabs.first().focus();
    };

    // focus last tab
    function _focusLastTab(tabs) {
        tabs.last().focus();
    };

    function activateTabOnLoad() {
        // trigger tab if URL # equals tab id - this is to allow linking to specific tab
        var url = document.location.toString();
        if (url.match('#')) {
            var tabtoopen = document.getElementById(url.split('#')[1])
            tabtoopen.click();
        }
    }

    window.LTUDS.registerComponent(_config.name, {
        eventHandlers: {
            navTabOnClick: clickHandler,
            navTabOnKeyDown: keyDownHandler,
            navTabOnKeyUp: keyUpHandler,
        },
        helpers: {
            activateTabOnLoad: activateTabOnLoad
        },
        setup: (helper) => {
            const { getSelector } = helper

            const selector = getSelector(_config.selectors.container, 'navTab', _config.selectors)

            jQuery(document)
                .off('click', selector, clickHandler)
                .on('click', selector, clickHandler)
                .off('keydown', selector, keyDownHandler)
                .on('keydown', selector, keyDownHandler)
                .off('keyup', selector, keyUpHandler)
                .on('keyup', selector, keyUpHandler)
                ;

            activateTabOnLoad()
        },
    })

});
