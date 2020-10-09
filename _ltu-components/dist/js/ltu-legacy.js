/*
 *  This javascript is for legacy header, nav and footer functions
 */


/*** from legacy parse file v5 #543334 ***/
// Set nav-out class on load if mobile viewport
var mobileBreakingPoint = 1023;
/*
// replace with jquery version so can use document ready
// sometimes this fires too early before window width is established
if(window.outerWidth <= mobileBreakingPoint){
    //collapseUniverse();
    var b = document.body
    b.className += ' nav-out';
}*/

$(document).ready(function(){
    if ($(window).width() <= mobileBreakingPoint) {
        $('body').addClass('nav-out');
    }
});

/*** behaviours.js #703156  -- EXCERPT ONLY ***/
// set nav-out on window resize
var resizeTimer,
    windowWidth = $(window).width();

$(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Call functions here

        // Only fire on horizontal resize
        if ($(window).width() != windowWidth) {
            // Adjust global nav
            if ($(window).width() <= mobileBreakingPoint) {
                $('body').addClass('nav-out');
            } else {
                $('body').removeClass('nav-out');
            }
        }
        windowWidth = $(window).width();

    }, 250);
});

/*** global.js #815086 -- EXCERPT ONLY ***/

// Toggle mobile nav
document.querySelector('#hamburger').addEventListener('click', function(event){
    document.body.classList.toggle('nav-out');
    event.preventDefault();
});
// Toggle desktop nav
document.querySelector('.hide-nav button').addEventListener('click', function(){
    document.body.classList.toggle('nav-out');
});

/* Add class to current mega-menu */
var loc = window.location.pathname.split('/');
if (loc[1] == 'study') {document.querySelector('.a1').classList.add('current_site');}
if (loc[1] == 'courses') {document.querySelector('.a2').classList.add('current_site');}
if (loc[1] == 'international') {document.querySelector('.a3').classList.add('current_site');}
if (loc[1] == 'industry-community') {document.querySelector('.a4').classList.add('current_site');}
if (loc[1] == 'research') {document.querySelector('.a5').classList.add('current_site');}
if (loc[1] == 'about') {document.querySelector('.a6').classList.add('current_site');}
/* Students mega-menu */
if (loc[1] == 'students' && loc[2] == 'getting-started') {document.querySelector('.a1').classList.add('current_site');}
if (loc[1] == 'students' && loc[2] == 'admin') {document.querySelector('.a2').classList.add('current_site');}
if (loc[1] == 'students' && loc[2] == 'your-course') {document.querySelector('.a3').classList.add('current_site');}
if (loc[1] == 'students' && loc[2] == 'study-resources') {document.querySelector('.a4').classList.add('current_site');}
if (loc[1] == 'students' && loc[2] == 'support') {document.querySelector('.a5').classList.add('current_site');}
if (loc[1] == 'students' && loc[2] == 'opportunities') {document.querySelector('.a6').classList.add('current_site');}
if (loc[1] == 'students' && loc[2] == 'international') {document.querySelector('.a7').classList.add('current_site');}

/* Mobile fat footer accordions */
var mobileFooterNodes = document.querySelectorAll('.footer-node h2');
for (i = 0; i < mobileFooterNodes.length; i++) {
    mobileFooterNodes[i].addEventListener('click', function(e){
        e.target.classList.toggle('open');
    });
}

/* Utility nav dropdowns */
var dropDown = document.querySelectorAll('.dropdown button');
for (i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener('click',function(e){
        var lastClicked = document.querySelector('.dropdown.open');
        if (lastClicked != null) {
            lastClicked.classList.remove('open');
        }
        e.target.parentNode.classList.toggle('open');
        e.stopPropagation();
        closeUtilityDropdown();
    });
}
function closeUtilityDropdown() {
    document.body.addEventListener('click',function(e){
        var lastClicked = document.querySelector('.dropdown.open');
        if (lastClicked !== null) {
            lastClicked.classList.remove('open');
        }
    });
}


/*** mega-menu.js  #796335 ***/
// Loops over nav items and resets them for accesability standards
try{
function clearActiveNav(){
    var items = document.getElementsByClassName('nav-universe');
    for (i = 0; i < items.length-1; i++) {
        item = items[i];
        item.classList.remove('active');
        item.childNodes[0].setAttribute('aria-expanded','false');
        item.childNodes[2].setAttribute('aria-hidden','true');
        document.getElementById('nav-universes').classList.remove('active');
    }
}

var mmTriggers = document.getElementsByClassName('mm-trigger');
for (i = 0; i < mmTriggers.length-1; i++) {
    var item = mmTriggers[i];
    if (item.checked == true) {
        item.parentNode.classList.add('active');
        item.parentNode.parentNode.parentNode.classList.add('active');
    }
    item.addEventListener('change',function(e){
        $this = e.target;
        clearActiveNav();
        document.getElementById('nav-universes').classList.add('active');
        if ($this.checked) {
            $this.setAttribute('aria-expanded','true');
            $this.nextElementSibling.nextElementSibling.setAttribute('aria-hidden','false');
            $this.parentElement.classList.add('active');
        }
        if($this.getAttribute('title') == 'close'){
            clearActiveNav();
        }
    },false);
    item.addEventListener('keyup',function(e){
        if (e.key == 'Escape' || e.key == 27 || e.key == 'Esc') {
            document.getElementById('mm-close').checked = true;
            clearActiveNav()
            document.getElementById('nav-universes').classList.remove('active');
        }
    });
}

document.getElementById('mm-close').addEventListener('change',function(e){
    $this = e.target;
    if ($this.checked) {
        document.getElementById('nav-universes').classList.remove('active');
        clearActiveNav();
    }
});

document.body.addEventListener('click', function(e){
    if (document.getElementById('nav-universes').classList.contains('active') == true && e.target.classList.contains('mm-trigger') == false) {
        document.getElementById('mm-close').checked = true;
        clearActiveNav();
    }
});

var menuItems = document.getElementsByClassName('mega-menu-item');
for (i = 0; i < mmTriggers.length-1; i++) {
    menuItems[i].addEventListener('click', function(e){
        e.stopPropagation();
    });
};
}catch(e){

}

/*** gdpr.js #881697  ***/
var gdprState = localStorage.gdpr;
var gdprButton = document.getElementById('gdpr-button');
if (!gdprState) {
    document.body.classList.add('gdpr-on');
    gdprButton.addEventListener('click',function(){
        gdprButton.parentNode.outerHTML = '';
        localStorage.setItem('gdpr','hide');
        document.body.classList.remove('gdpr-on');
    });
}
if (gdprState == 'hide') {
    gdprButton.parentNode.outerHTML = '';
}

/*** local-nav.js  #796337 ***/
var triggers = document.querySelectorAll('.level-two, .level-three');
for (i = 0; i < triggers.length; i++) {
    var item = triggers[i];
    item.insertAdjacentHTML('beforeBegin','<button aria-expanded="false"><img src="https://www.latrobe.edu.au/__data/assets/file/0005/745196/plus-dark.svg" alt="collapsed" /></button>');
    if (item.parentElement.classList.contains('current')){
        triggers[0].previousElementSibling.setAttribute('aria-expanded','true');
        item.classList.add('open');
        item.previousElementSibling.firstElementChild.setAttribute('src','https://www.latrobe.edu.au/__data/assets/file/0004/745195/minus-dark.svg');
        item.previousElementSibling.previousElementSibling.classList.add('open-parent');
        //item.parentElement.parentElement.insertBefore(item.parentElement, item.parentElement.parentElement.children[0]);
    }
    item.previousElementSibling.addEventListener('click',function(e){
        e.target.previousElementSibling.classList.toggle('open-parent');
        if (e.target.nextElementSibling.classList.contains('open')) {
            e.target.setAttribute('aria-expanded','false');
            e.target.nextElementSibling.classList.remove('open');
            e.target.nextElementSibling.classList.add('closed');
            e.target.firstElementChild.setAttribute('src','https://www.latrobe.edu.au/__data/assets/file/0005/745196/plus-dark.svg');
            e.target.firstElementChild.setAttribute('alt','collapsed');
        } else {
            e.target.setAttribute('aria-expanded','true');
            e.target.firstElementChild.setAttribute('src','https://www.latrobe.edu.au/__data/assets/file/0004/745195/minus-dark.svg');
            e.target.firstElementChild.setAttribute('alt','expanded');
            e.target.nextElementSibling.classList.add('open');
            e.target.nextElementSibling.classList.remove('closed');
        }
    },false);
}

/*** my-saved-courses.js #846697  ***/
// My saved courses
var savedCourseList = [];
var storedCourses = localStorage.getItem('savedCourses');
var saveToggle = document.querySelector('#save-course-icon');
var mySavedCourses = document.querySelector('#my-saved-courses');
var favCount = document.querySelector('#favourite-count');
// Add localStorage values to array
if (storedCourses) {
    var num = storedCourses.split(',');
    for (var n = 0; n < num.length; n++) {
        savedCourseList.push(parseInt(num[n]));
    }
    incrimentCourseCount();
};
// Update the counter for number of saved courses
function incrimentCourseCount(){
    favCount.parentNode.setAttribute('href','/courses/my-saved-courses?favourites='+savedCourseList);
    favCount.textContent = savedCourseList.length;
    // If no saved courses, hide counter and delete localStorage
    if (savedCourseList.length == 0) {
        mySavedCourses.classList.add('hidden');
        localStorage.removeItem('savedCourses');
    } else mySavedCourses.classList.remove('hidden');
};


/*** site-search.js #1174917  ***/
// Event listener for search clear button
var ltuSearchField = document.querySelector('#LT_search_field');
var ltuSearchClear = document.getElementById('clear_LT_search_field');
ltuSearchClear.addEventListener('click', function(evt){
    evt.preventDefault();
    ltuSearchField.value='';
});

/*** extract from #655962 ***/
// Autocompletion setup - header
(function($) {
    $('#LT_search_field').autocompletion({
         datasets: {
           organic: {
             enabled: 'enabled',
             collection: 'Latrobe-search',
             profile   : '_default',
             program   : 'https://search.latrobe.edu.au/s/suggest.json',
           }
         },
         length: 3
     });
 })(jQuery);
 // Autocompletion setup - footer
 (function($) {
    $('#LTU_search_field').autocompletion({
         datasets: {
           organic: {
             enabled: 'enabled',
             collection: 'Latrobe-search',
             profile   : '_default',
             program   : 'https://search.latrobe.edu.au/s/suggest.json',
           }
         },
         length: 3
     });
 })(jQuery);</script>