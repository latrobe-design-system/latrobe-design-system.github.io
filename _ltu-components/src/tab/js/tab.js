/*
 *  Adapted from: 
 *  https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
 */

$(document).ready(function(){

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

 // Events bound to page content wrapper to reduce number of registered events and also make it work for ajax loaded content

  // When a tab is clicked, activateTab is fired to activate it
  $('.ds-page-content').on('click', '.ds-tabs-nav__tab', function(){
    var tabButton = $(this);
    activateTab(tabButton, false);
  });

  // Handle keydown on tabs
  $('.ds-page-content').on('keydown', '.ds-tabs-nav__tab', function(event){
    var key = event.keyCode;
    var tabButton = $(this);
    var tablist = tabButton.parent();

    switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        focusLastTab($(tablist).children());
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        focusFirstTab($(tablist).children());
        break;

      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(tablist, tabButton, event);
        break;
    };
  });

  // Handle keyup on tabs
  $('.ds-page-content').on('keyup', '.ds-tabs-nav__tab', function(event){
    var key = event.keyCode;
    var tabButton = $(this);
    var tablist = tabButton.parent();

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(tablist, tabButton, event);
        break;
      case keys.enter:
      case keys.space:
        activateTab(tabButton);
        break;
    };
  });

  // When a tablists aria-orientation is set to vertical,
  // only up and down arrow should function.
  // In all other cases only left and right arrow function.
  function determineOrientation (tablist, tabButton, event) {
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
      switchTabOnArrowPress(tablist, tabButton, event);
    };
  };

  // Either focus the next, previous, first, or last tab
  // depending on key pressed
  function switchTabOnArrowPress (tablist, tabButton, event) {
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
          focusLastTab(tabs);
        }
        else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab(tabs);
        };
      };
    };
  };


  // Activates any given tab panel
  function activateTab (tabButton, setFocus) {
    setFocus = setFocus || true;

    // id of button
    var tabButtonId = tabButton.attr('id');
    // id of tab button controls
    var tab = $('[aria-labelledby="'+tabButtonId+'"]');

    // Deactivate all tabs
    deactivateTabs(tabButton, tab);

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
  function deactivateTabs (tabButton, tab) {

    // set tab button and sibling buttons to unselected state 
    tabButton.attr('tabindex', '-1').siblings('[role="tab"]').attr('tabindex', '-1');
    tabButton.attr('aria-selected', 'false').siblings('.ds-tabs-nav__tab').attr('aria-selected', 'false');

    // set tab and sibling tabs to unselected state
    tab.attr('hidden', 'hidden').siblings('[role="tabpanel"]').attr('hidden', 'hidden');
    
  };


  // focus firts tab
  function focusFirstTab (tabs) {
    tabs.first().focus();
  };

  // focus last tab
  function focusLastTab (tabs) {
    tabs.last().focus();
  };


 
  // trigger tab if URL # equals tab id - this is to allow linking to specific tab
  var url = document.location.toString();
  if (url.match('#')) {
    var tabtoopen = document.getElementById(url.split('#')[1])
    tabtoopen.click();
  }

});