$(document).ready(function() {
  // initialise paddles
  const scrollingContainer = $('.ds-card-set--comparison');
  $(".ds-scroll-left").hide();
});

// Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

let currentPosition = 0;
let atLast = false;

const elementSet = document.querySelector('.ds-card-set--comparison');
const element = document.querySelector('.ds-card-set--comparison > .ds-card');
const elementSetWidth = parseFloat( elementSet.clientWidth );
const elementWidth = 300;
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

$(".ds-scroll-left").click(function () {

  $('.ds-scroll-right').show();
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
        elementSet.scrollLeft = 990;
        currentPosition = 990;
        // console.log(elementSet.scrollLeft);
        atLast = false;
        // done = true;
      } else {
        elementSet.scrollLeft -= elementWidth / 10;
      }
      
      console.log("scroll by: ", elementSet.scrollLeft, currentPosition);

      if (elementSet.scrollLeft === 0) {
        console.log('first');
        $('.ds-scroll-left').hide();
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
