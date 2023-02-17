$(document).ready(function() {
    const numberOfElements = document.querySelectorAll('.ds-card-set--comparison > .ds-card').length;

    if ( numberOfElements === 3) {
        console.log('3 elements');
        document.querySelector('.ds-card-set--comparison').classList.add('ds-card-set-comparison--3max');
        // document.querySelector('.ds-card-set--comparison').classList.remove('ds-card-set--comparison');
        document.querySelector('.ds-scroll-right').style.display = 'none';
    }
});