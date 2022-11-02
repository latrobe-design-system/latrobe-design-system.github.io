$(document).ready(function() {
    const numberOfElements = document.querySelectorAll('.ds-card-set--comparison > .ds-card').length;

    if ( numberOfElements === 3) {
        console.log('3 elements');
        document.querySelector('.ds-card-set--comparison').classList.add('ds-card-set--3max');
    }
});