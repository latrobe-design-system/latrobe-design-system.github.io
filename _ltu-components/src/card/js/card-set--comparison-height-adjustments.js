let tallestCardHeading = 0;
let tallestCardInfo = 0;
let tallestCardStatusInfo = 0;
let numberOfAccordionsPerCard = 0;
let tallestAccordionInSet = [];

$(document).ready(function() {
    console.log('height init')
    
    const cardElementSet = document.querySelectorAll('.ds-card-set--comparison .ds-card');

    addEventListener('resize', (event) => {
        console.log(event, 'resized!')
        cardElementSet.forEach(element => {
            console.log(element)
            const cardHeading = element.querySelector('.ds-card__heading')
            const cardStatusInfo = element.querySelector('.ds-card__status-info')
            const cardInfo = element.querySelector('.ds-card__info');
            const cardAccordionSet = element.querySelectorAll('.ds-accordion');
    
            if (cardHeading.clientHeight > tallestCardHeading) {
                tallestCardHeading = cardHeading.clientHeight;
            }
    
            if (cardStatusInfo.clientHeight > tallestCardStatusInfo) {
                tallestCardStatusInfo = cardStatusInfo.clientHeight;
            }
    
            if (cardInfo.clientHeight > tallestCardInfo) {
                tallestCardInfo = cardInfo.clientHeight;
            }

            numberOfAccordionsPerCard = cardAccordionSet.length;
            console.log(numberOfAccordionsPerCard)

            cardAccordionSet.forEach((accordion, index) => {
                // accordion.style.height = tallestAccordionInSet + 'px';
                console.log('accordion', accordion);
                // if (tallestAccordionInSet[index] === null) {
                //     console.log('null');
                //     tallestAccordionInSet[index] = 0
                // }

                tallestAccordionInSet.push(accordion.clientHeight);
                if (accordion.clientHeight > tallestAccordionInSet[index]) {
                    tallestAccordionInSet[index] = accordion.clientHeight;
                }
            })

            console.log('tallest', tallestAccordionInSet);
        })
    
        cardElementSet.forEach(element => {
            const cardHeading = element.querySelector('.ds-card__heading')
            const cardStatusInfo = element.querySelector('.ds-card__status-info')
            const cardInfo = element.querySelector('.ds-card__info');
            const cardAccordionSet = element.querySelectorAll('.ds-accordion');
    
            cardHeading.style.height = tallestCardHeading + 'px';
            cardStatusInfo.style.height = tallestCardStatusInfo + 'px';
            cardInfo.style.height = tallestCardInfo + 'px';
            
            cardAccordionSet.forEach((accordion, index) => {
                // let accordionHeading = accordion.querySelector('h3');
                // accordionHeading.style.height = tallestAccordionInSet[index] + 'px';
                accordion.style.height = tallestAccordionInSet[index] + 'px';
            })
        })
    
    });


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