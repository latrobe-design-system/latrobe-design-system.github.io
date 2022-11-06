$(document).ready(function() {
  // initialise paddles
  const scrollingContainer = $('.ds-card-set--comparison');
  $(".ds-scroll-left").hide();
  $(".ds-card-set--comparison").addClass('ds-card-set--comparison__first');
});



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
    //  else {
    //   document.querySelectorAll('.ds-card__header').forEach(element => {
    //     entry.target.classList.remove('ds-card__header--sticky');
    //   })
    // }
  });
}

// Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

let currentPosition = 0;
let atLast = false;

const elementSet = document.querySelector('.ds-card-set--comparison');
const element = document.querySelector('.ds-card-set--comparison > .ds-card');
const elementHeadings = document.querySelectorAll('.ds-card-set--comparison > .ds-card > .ds-card__header');
const elementSetWidth = parseFloat( elementSet.clientWidth );
// const elementWidth = 300;
// const elementWidth = 420;
const elementWidth = 420;
const numberOfElements = document.querySelectorAll('.ds-card-set--comparison > .ds-card').length;

//   $('.ds-scroll-right').show();

//  console.log(elementSet.scrollWidth, elementSet.scrollLeft, elementSet.scrollWidth - elementSet.scrollLeft)
//   let start, previousTimeStamp;
//   let done = false;

//   function step(timestamp) {
//     // if (elementSet.scrollLeft === 0) {
//     //   // $(".ds-scroll-left").hide();
//     // }

//     if (start === undefined) {
//       start = timestamp;
//     }
//     const elapsed = timestamp - start;

//     if (previousTimeStamp !== timestamp) {
//       if (elementSet.scrollLeft === 0) {
//           console.log('first');
//           $('.ds-scroll-right').hide();
//           done = true;
//       }
      
//       element.scrollLeft -= elementWidth / 10;
//       console.log(element.scrollLeft)

//       if (element.scrollLeft === currentPosition - elementWidth) {
//         done = true;
//         currentPosition -= elementWidth;
//         console.log("-!", currentPosition);
     
//       }

//       if (elementSet.scrollWidth - elementSet.scrollLeft === elementSet.clientWidth) {
//         console.log("-!", currentPosition);
//       }
  

//       // position didn't change
//       if (currentPosition === 0) {
//         $('.ds-scroll-left').hide();
//       }
//     }

//     if (!done) {
//       window.requestAnimationFrame(step);
//     } else {
//       window.cancelAnimationFrame(step);
//     }
//   }

//   window.requestAnimationFrame(step);
// });

function toggleStickyHeadings(position) {
  // console.log('toggle', position)
  // elementHeadings.forEach(elementHeading => {
  //     elementHeading.style.position = position + ' !important';
  // })

}

$(".ds-scroll-left").click(function () {

  $('.ds-scroll-right').show();
  $(".ds-card-set--comparison").addClass('ds-card-set--comparison__last');

  // Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  let start, previousTimeStamp;
  let done = false;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    // const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      
      if (atLast) {
        // todo: make dynamic
        $(".ds-card-set--comparison").removeClass('ds-card-set--comparison__last');
        elementSet.scrollLeft = 990;
        currentPosition = 990;
        // console.log(elementSet.scrollLeft);
        atLast = false;
        // done = true;
      } else {
        // $(".ds-card-set--comparison").show();
        $(".ds-card-set--comparison").removeClass('ds-card-set--comparison__first');
        elementSet.scrollLeft -= elementWidth / 10;
      }
      
      console.log("scroll by: ", elementSet.scrollLeft, currentPosition);

      if (elementSet.scrollLeft === 0) {
        console.log('first');
        $('.ds-scroll-left').hide();
        $(".ds-card-set--comparison").addClass('ds-card-set--comparison__first');
        $(".ds-card-set--comparison").removeClass('ds-card-set--comparison__last');
        currentPosition = 0;
        done = true;

      }

      if (elementSet.scrollLeft === currentPosition - elementWidth) {
        done = true;
        // atLast = false;
        currentPosition -= elementWidth;
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
  $('.ds-scroll-left').show();
  $(".ds-card-set--comparison").removeClass('ds-card-set--comparison__first');


  // Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  console.log(elementSetWidth, elementWidth);

  let start, previousTimeStamp;
  let done = false;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    // const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {

      // elementSet.scrollLeft += elementWidth / 10;
      elementSet.scrollLeft += elementWidth / 15;
      console.log("scroll by: ", elementSet.scrollLeft);

      if (elementSet.scrollWidth - elementSet.scrollLeft === elementSet.clientWidth) {
        console.log('last');
        $('.ds-scroll-right').hide();
        $(".ds-card-set--comparison").addClass('ds-card-set--comparison__last');
        currentPosition = elementSet.clientWidth;
        atLast = true;
        done = true;
      }

      if (elementSet.scrollLeft === currentPosition + elementWidth) {
        done = true;
        currentPosition += elementWidth;
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
