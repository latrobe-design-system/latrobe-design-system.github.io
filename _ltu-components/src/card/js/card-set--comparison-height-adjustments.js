let tallestCardHeading = 0;
let tallestCardInfo = 0;
let tallestCardStatusInfo = 0;

// const cardHeading = document.querySelectorAll('.ds-card-set--comparison .ds-card__heading');

// const cardStatusInfo = document.querySelectorAll('.ds-card-set--comparison .ds-card__status-info');

// const cardInfo = document.querySelectorAll('.ds-card-set--comparison .ds-card__info');

$(document).ready(function() {
    console.log('height init')

    const cardElementSet = document.querySelectorAll('.ds-card-set--comparison .ds-card');

    cardElementSet.forEach(element => {
        console.log(element)
        const cardHeading = element.querySelector('.ds-card__heading')
        const cardStatusInfo = element.querySelector('.ds-card__status-info')
        const cardInfo = element.querySelector('.ds-card__info');

        if (cardHeading.clientHeight > tallestCardHeading) {
            tallestCardHeading = cardHeading.clientHeight;
            // cardHeading.style.height = tallestCardHeading + 'px';
        }

        if (cardStatusInfo.clientHeight > tallestCardStatusInfo) {
            tallestCardStatusInfo = cardStatusInfo.clientHeight;
            // cardStatusInfo.style.height = tallestCardStatusInfo + 'px';
        }

        if (cardInfo.clientHeight > tallestCardInfo) {
            tallestCardInfo = cardInfo.clientHeight;
            // cardInfo.style.height = tallestCardInfo + 'px';
        }
    })

    cardElementSet.forEach(element => {
        const cardHeading = element.querySelector('.ds-card__heading')
        const cardStatusInfo = element.querySelector('.ds-card__status-info')
        const cardInfo = element.querySelector('.ds-card__info');

        cardHeading.style.height = tallestCardHeading + 'px';
        cardStatusInfo.style.height = tallestCardStatusInfo + 'px';
        cardInfo.style.height = tallestCardInfo + 'px';
    })

    // cardHeading.forEach(element => {
    //     let height = element.clientHeight;
    //     console.log(height)
    //     if (height > tallestCardHeading) {
    //         tallestCardHeading = height;
    //     }

    //     console.log('tallest card heading is now', tallestCardHeading)
    // })

    // cardInfo.forEach(element => {
    //     let height = element.clientHeight;
    //     console.log(height)
    //     if (height > tallestCardInfo) {
    //         tallestCardInfo = height;
    //     }

    //     console.log('tallest card info is now', tallestCardInfo)
    // })

    // cardStatusInfo.forEach(element => {
    //     let height = element.clientHeight;
    //     console.log(height)
    //     if (height > tallestCardStatusInfo) {
    //         tallestCardStatusInfo = height;
    //     }

    //     console.log('tallest card info status is now', tallestCardStatusInfo)
    // })
})