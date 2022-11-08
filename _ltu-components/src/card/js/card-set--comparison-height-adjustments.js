$(document).ready(function() {   
    dynamicHeights();

    addEventListener('resize', (event) => {
        dynamicHeights();
    })
})

function dynamicHeights() {
    let tallestCardHeading = 0;
    let tallestCardInfo = 0;
    let tallestCardStatusInfo = 0;
    let tallestCardChecklist = 0;
    let numberOfAccordionsPerCard = 0;
    let tallestAccordionInSet = [];

    const cardElementSet = document.querySelectorAll('.ds-card-set--comparison .ds-card');

    cardElementSet.forEach(element => {
        const cardHeading = element.querySelector('.ds-card__heading')
        const cardStatusInfo = element.querySelector('.ds-card__status-info')
        const cardInfo = element.querySelector('.ds-card__info');
        const cardChecklist = element.querySelector('.ds-card__checklist');
        const cardAccordionSet = element.querySelectorAll('.ds-accordion .ds-accordion__trigger');

        if (cardHeading.clientHeight > tallestCardHeading) {
            tallestCardHeading = cardHeading.clientHeight;
        }

        if (cardStatusInfo.clientHeight > tallestCardStatusInfo) {
            tallestCardStatusInfo = cardStatusInfo.clientHeight;
        }

        if (cardInfo.clientHeight > tallestCardInfo) {
            tallestCardInfo = cardInfo.clientHeight;
        }

        if (cardChecklist.clientHeight > tallestCardChecklist) {
            tallestCardChecklist = cardChecklist.clientHeight;
        }

        cardAccordionSet.forEach((accordion, index) => {
            if ( tallestAccordionInSet[index] === undefined ) {
                if (accordion.clientHeight > 50) {                        
                    tallestAccordionInSet.push(accordion.clientHeight);
                }
            }

            if ( accordion.clientHeight > tallestAccordionInSet[index] ) {
                tallestAccordionInSet[index] = accordion.clientHeight;
            }
        })
    })

    cardElementSet.forEach(element => {
        const cardHeading = element.querySelector('.ds-card__heading')
        const cardStatusInfo = element.querySelector('.ds-card__status-info')
        const cardInfo = element.querySelector('.ds-card__info');
        const cardChecklist = element.querySelector('.ds-card__checklist');
        const cardAccordionSet1 = element.querySelectorAll('.ds-accordion');
        const cardAccordionSet = element.querySelectorAll('.ds-accordion  .ds-accordion__trigger');

        cardHeading.style.height = '';
        cardHeading.style.height = tallestCardHeading + 'px';

        cardStatusInfo.style.height = '';
        cardStatusInfo.style.height = tallestCardStatusInfo + 'px';

        cardInfo.style.height = '';
        cardInfo.style.height = tallestCardInfo + 'px';

        cardChecklist.style.height = '';
        cardChecklist.style.height = tallestCardChecklist + 'px';
        
        cardAccordionSet1.forEach((accordion, index) => {
            accordion.style.height = '';
            accordion.style.height = tallestAccordionInSet[index] + 'px';
        })
        cardAccordionSet.forEach((accordion, index) => {
            accordion.style.height = '';
            accordion.style.height = tallestAccordionInSet[index] + 'px';
        })
    })
}