$(document).ready(function() {   
    dynamicHeights();

    addEventListener('resize', (event) => {
        setTimeout(() => dynamicHeights(), 500) // wait for a reasonable time after both animation and redraw are completed
    })
})

function dynamicHeights() {
    let tallestCardHeading = 0;
    let tallestCardInfo = 0;
    let tallestCardStatusInfo = 0;
    let tallestCardChecklist = 0;
    let tallestAccordionInSet = [];

    const cardElementSet = document.querySelectorAll('.ds-card-set--comparison .ds-card');

    cardElementSet.forEach(element => {
        let cardHeading = element.querySelector('.ds-card__heading');
        let cardStatusInfo = element.querySelector('.ds-card__status-info');
        let cardInfo = element.querySelector('.ds-card__info');
        let cardChecklist = element.querySelector('.ds-card__checklist');
        let cardAccordionSet = element.querySelectorAll('.ds-accordion .ds-accordion__trigger');

        try {
            cardHeading.style.height = null

            if (cardHeading.clientHeight > tallestCardHeading) {
                tallestCardHeading = cardHeading.clientHeight;
            }
        } catch (err) {
            console.log('no card heading');
        }

       try {
            if (cardStatusInfo.clientHeight > tallestCardStatusInfo) {
                tallestCardStatusInfo = cardStatusInfo.clientHeight;
            }
        } catch (err) {
               console.log('no card statuses');
        }

        try {
            if (cardInfo.clientHeight > tallestCardInfo) {
                tallestCardInfo = cardInfo.clientHeight;
            }
        } catch (err) {
               console.log('no card info?');
        }

        try {
            if (cardChecklist.clientHeight > tallestCardChecklist) {
                tallestCardChecklist = cardChecklist.clientHeight;
            }
        } catch (err) {
            console.log('no checklists')
        }
        
        try {
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
        } catch (err) {
            console.log('no accordions')
        }
    })

    cardElementSet.forEach(element => {
        let cardHeading = element.querySelector('.ds-card__heading')
        let cardStatusInfo = element.querySelector('.ds-card__status-info')
        let cardInfo = element.querySelector('.ds-card__info');
        let cardChecklist = element.querySelector('.ds-card__checklist');
        let cardAccordionSet1 = element.querySelectorAll('.ds-accordion .ds-accordion__trigger');
        let cardAccordionSet = element.querySelectorAll('.ds-accordion  .ds-accordion__trigger');

        try {
            cardHeading.style.height = '';
            cardHeading.style.height = tallestCardHeading + 'px';
        } catch (err) {
        }

        try {
            cardStatusInfo.style.height = '';
            cardStatusInfo.style.height = tallestCardStatusInfo + 'px';
        } catch (err) {
        }

        try {
            cardInfo.style.height = '';
            cardInfo.style.height = tallestCardInfo + 'px';
        } catch (err) {
        }

        try {
            cardChecklist.style.height = '';
            cardChecklist.style.height = tallestCardChecklist + 'px';
        } catch (err) {
        }

        try {        
            cardAccordionSet1.forEach((accordion, index) => {
                accordion.style.height = '';
                accordion.style.height = tallestAccordionInSet[index] + 'px';
            })
        } catch (err) {
        }
        
        try {
            cardAccordionSet.forEach((accordion, index) => {
                try {
                    accordion.style.height = '';
                    accordion.style.height = tallestAccordionInSet[index] + 'px';
                } catch (err) {
                }
            })
        } catch (err) {
        }
    })
}