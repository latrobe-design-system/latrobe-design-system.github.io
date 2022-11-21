$(document).ready(function() {
  // initialise paddles
  const scrollingContainer = $('.ds-card-set--comparison');
  $(".ds-scroll-left").hide();
  $(".ds-card-set--comparison").addClass('ds-card-set--comparison__first');
});

/*
let options = {
  // root: document.querySelector('.ds-card-set--comparison'),
  // rootMargin: '-50px',
  threshold: 0.6
}

let observer = new IntersectionObserver(dostuff, options);

// let observedElements = document.querySelectorAll('.ds-card__body');
let observedElements = document.querySelectorAll('.ds-card__body');

observedElements.forEach(target => {
  observer.observe(target);
})

// let observer2 = new IntersectionObserver(dostuff2, options);

// let target2 = document.querySelector('.ds-card__heading');
// observer.observe(target2);


function dostuff(entries) {

  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log('intersect!')
      // document.querySelectorAll('.ds-card__header').forEach(element => {
      //   element.classList.add('ds-card__header--sticky');
      // })
      document.querySelectorAll('.ds-card__header').forEach(element => {
        // element.classList.add('ds-card__header--sticky');
        // $(element).hide();
      })
      document.querySelectorAll('.ds-card__status-info').forEach(element => {
        // element.classList.add('ds-card__status-info--sticky');
      })
      document.querySelectorAll('.ds-card__cta').forEach(element => {
        // element.classList.add('ds-card__cta--sticky');
      })
      document.querySelectorAll('.ds-card__body').forEach(element => {
        // element.classList.add('ds-card__body--transition');
      })
    } else {
      console.log('not intersecting...')
      // document.querySelectorAll('.ds-card__header').forEach(element => {
      //   element.classList.remove('ds-card__header--sticky');
      // })
      document.querySelectorAll('.ds-card__header').forEach(element => {
        element.classList.remove('ds-card__header--sticky');
      })
      document.querySelectorAll('.ds-card__body').forEach(element => {
        element.classList.remove('ds-card__body--transition');
      })
    }
  });
}

function dostuff2(entries) {
  console.log('intersect2!')
  entries.map((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.ds-card__header').forEach(element => {
        console.log('back up!')
        element.classList.remove('ds-card__header--sticky');
      })
    }
  });
}
*/

// Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

let elementSet = document.querySelector('.ds-card-set--comparison');

const element = document.querySelector('.ds-card-set--comparison > .ds-card');
const elementHeadings = document.querySelectorAll('.ds-card-set--comparison > .ds-card > .ds-card__header');
const elementSetWidth = parseFloat( elementSet.clientWidth );
const elementWidth = 420;
const numberOfElements = document.querySelectorAll('.ds-card-set--comparison > .ds-card').length;

function toggleStickyHeadings(position) {
  // console.log('toggle', position)
  // elementHeadings.forEach(elementHeading => {
  //     elementHeading.style.position = position + ' !important';
  // })
}

$(".ds-scroll-left").click(function () {
  elementSet = this.nextElementSibling;
  let currentPosition = parseInt(elementSet.dataset.currentpos);
  let atLast = elementSet.dataset.atlast;

  // Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  let start, previousTimeStamp;
  let done = false;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    // const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      
      if (atLast || elementSet.dataset.atlast == 'true') {
        elementSet.classList.remove('ds-card-set--comparison__last');
        // elementSet.scrollLeft = 990;
        // currentPosition = 990;
        // elementSet.dataset.currentpos = 990;

        atLast = false;
        elementSet.dataset.atlast = false;
      } else {
        elementSet.classList.remove('ds-card-set--comparison__first');
        elementSet.scrollLeft -= elementWidth / 10;
        currentPosition -= elementWidth;
        elementSet.dataset.currentpos = currentPosition;
        // console.log('aaa', elementSet.dataset)
      }
      
      // console.log("scroll by: ", elementSet.scrollLeft, currentPosition);
      // console.log(elementSet.dataset);

      if (elementSet.scrollLeft === 0) {
        console.log('first');
        $(elementSet.previousElementSibling).hide();
        $(elementSet.nextElementSibling).show();
        elementSet.classList.add('ds-card-set--comparison__first');
        elementSet.classList.remove('ds-card-set--comparison__last');
        currentPosition = 0;
        elementSet.dataset.currentpos = 0;
        atLast = false;
        elementSet.dataset.atlast = false;
        done = true;

      }

      if (elementSet.scrollLeft === parseInt(currentPosition) - elementWidth) {
        done = true;
        currentPosition -= elementWidth;
        elementSet.dataset.currentpos = currentPosition;
        console.log('check', currentPosition, elementSet.dataset)
      }
    }

    if (!done) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
});

$(".ds-scroll-right").click(function () {
  elementSet = this.previousElementSibling;
  let currentPosition = parseInt(elementSet.dataset.currentpos);
  // let atLast = false;
  let atLast = elementSet.dataset.atlast;

  $(elementSet.previousElementSibling).show();
  elementSet.classList.remove('ds-card-set--comparison__first');


  // Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  // console.log(elementSetWidth, elementWidth);

  let start, previousTimeStamp;
  let done = false;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }

    if (previousTimeStamp !== timestamp) {

      elementSet.scrollLeft += elementWidth / 15;
      // console.log("scroll by: ", elementSet.scrollLeft);

      if (elementSet.scrollWidth - elementSet.scrollLeft === elementSet.clientWidth) {
        console.log('last');
        $(elementSet.nextElementSibling).hide();
        elementSet.classList.add('ds-card-set--comparison__last');
        currentPosition = elementSet.clientWidth;
        elementSet.dataset.currentpos = currentPosition;
        console.log('!', elementSet.dataset)
        // elementSet = elementSet.clientWidth;
        
        atLast = true;
        elementSet.dataset.atlast = true;
        done = true;
      }

      console.log('val', elementSet.scrollLeft, parseInt(currentPosition) + elementWidth)

      if (elementSet.scrollLeft === parseInt(currentPosition) + elementWidth) {
        done = true;
        currentPosition += elementWidth;
        elementSet.dataset.currentpos = currentPosition;
      }
    }

    if (!done) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
});


$(document).ready(function() {
    const numberOfElements = document.querySelectorAll('.ds-card-set--comparison > .ds-card').length;

    if ( numberOfElements === 3) {
        console.log('3 elements');
        document.querySelector('.ds-card-set--comparison').classList.add('ds-card-set-comparison--3max');
        // document.querySelector('.ds-card-set--comparison').classList.remove('ds-card-set--comparison');
        document.querySelector('.ds-scroll-right').style.display = 'none';
    }
});

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
        const cardHeading = element.querySelector('.ds-card__heading');
        const cardStatusInfo = element.querySelector('.ds-card__status-info');
        const cardInfo = element.querySelector('.ds-card__info');
        const cardChecklist = element.querySelector('.ds-card__checklist');
        const cardAccordionSet = element.querySelectorAll('.ds-accordion .ds-accordion__trigger');

        try {
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
        const cardHeading = element.querySelector('.ds-card__heading')
        const cardStatusInfo = element.querySelector('.ds-card__status-info')
        const cardInfo = element.querySelector('.ds-card__info');
        const cardChecklist = element.querySelector('.ds-card__checklist');
        // const cardAccordionSet1 = element.querySelectorAll('.ds-accordion');
        const cardAccordionSet1 = element.querySelectorAll('.ds-accordion .ds-accordion__trigger');
        const cardAccordionSet = element.querySelectorAll('.ds-accordion  .ds-accordion__trigger');

        try {
            cardHeading.style.height = '';
            cardHeading.style.height = tallestCardHeading + 'px';
        } catch (err) {
            console.log('no 1')
        }

        try {
            cardStatusInfo.style.height = '';
            cardStatusInfo.style.height = tallestCardStatusInfo + 'px';
        } catch (err) {
            console.log('no 2')
        }

        try {
            cardInfo.style.height = '';
            cardInfo.style.height = tallestCardInfo + 'px';
        } catch (err) {
            console.log('no 3')
        }

        try {
            cardChecklist.style.height = '';
            cardChecklist.style.height = tallestCardChecklist + 'px';
        } catch (err) {
            console.log('no 4')
        }

        try {        
            cardAccordionSet1.forEach((accordion, index) => {
                // console.log('a', accordion)
                accordion.style.height = '';
                accordion.style.height = tallestAccordionInSet[index] + 'px';
            })
        } catch (err) {
            console.log('no 5')
        }
        
        try {
            cardAccordionSet.forEach((accordion, index) => {
                                // console.log('ab', accordion)
                try {
                    accordion.style.height = '';
                    accordion.style.height = tallestAccordionInSet[index] + 'px';
                } catch (err) {
                    console.log('no 6-')
                }
            })
        } catch (err) {
            console.log('no 6')
        }
    })
}