/*** global.js #815086 -- excerpt only ***/

// Toggle mobile nav
document.querySelector('#hamburger').addEventListener('click', function(event){
    document.body.classList.toggle('nav-out');
    event.preventDefault();
});
// Toggle desktop nav
/*document.querySelector('.hide-nav button').addEventListener('click', function(){
    document.body.classList.toggle('nav-out');
});*/

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
