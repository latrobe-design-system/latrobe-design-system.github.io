$(document).ready(function() {
  // initialise paddles
  // const scrollingContainer = $('.ds-card-set--comparison');
  $(".ds-scroll-left").hide();
  $(".ds-card-set--comparison").addClass('ds-card-set--comparison__first');
});

// Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

const elementWidth = 420;
const numberOfElements = document.querySelectorAll('.ds-card-set--comparison > .ds-card').length;

$(".ds-scroll-left").click(function () {
  
  let elementSet = this.nextElementSibling;
  const numberOfElements = elementSet.querySelectorAll('.ds-card').length;
  const scrollSpeed = elementWidth / 10;
  let currentPosition = parseInt(elementSet.dataset.currentpos);
  let atLast = elementSet.dataset.atlast;
  let scrollCounter = 0;

  // Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame


  let start, previousTimeStamp;
  let done = false;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }

    if (previousTimeStamp !== timestamp) {

      if (elementSet.dataset.atlast == 'true') {
        console.log('at last is true. go', elementSet.dataset)
        elementSet.classList.remove('ds-card-set--comparison__last');
        
        
         // Shows right button
        $(elementSet.nextElementSibling).show();

        elementSet.scrollLeft = elementSet.dataset.currentpos;
        currentPosition = parseInt(elementSet.dataset.currentpos);


        atLast = false;
        elementSet.dataset.atlast = false;
      } else {
        elementSet.classList.remove('ds-card-set--comparison__first');
        elementSet.scrollLeft -= scrollSpeed;
        scrollCounter += scrollSpeed;
        currentPosition -= elementWidth;
        elementSet.dataset.currentpos = currentPosition;
      }

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

      if (elementSet.scrollLeft === parseInt(currentPosition) - elementWidth || scrollCounter === scrollSpeed * 12) {
        done = true;
        scrollCounter = 0;
        currentPosition -= elementWidth;
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

$(".ds-scroll-right").click(function () {
  let elementSet = this.previousElementSibling;
  let currentPosition = parseInt(elementSet.dataset.currentpos);
  const scrollSpeed = elementWidth / 15;
  const numberOfElements = elementSet.querySelectorAll('.ds-card').length;
  let atLast = elementSet.dataset.atlast;

  // Shows left button
  $(elementSet.previousElementSibling).show();

  elementSet.classList.remove('ds-card-set--comparison__first');

  // Modified from https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  let start, previousTimeStamp;
  let done = false;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }

    if (previousTimeStamp !== timestamp) {
      elementSet.scrollLeft += scrollSpeed;

      if (Math.abs(elementSet.scrollWidth - elementSet.scrollLeft - elementSet.clientWidth) < 1) {
        console.log('last');

        $(elementSet.nextElementSibling).hide();
        elementSet.classList.add('ds-card-set--comparison__last');
        currentPosition = elementWidth * numberOfElements;
        elementSet.dataset.currentpos = currentPosition;
        
        atLast = true;
        elementSet.dataset.atlast = true;
        done = true;
      }

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
    const has3Cards = document.querySelectorAll('.ds-card-set--comparison');

    has3Cards.forEach(cardSet => {
           const numberOfElements = cardSet.querySelectorAll('.ds-card-set--comparison > .ds-card').length;
      
          if ( numberOfElements === 3) {
              cardSet.classList.add('ds-card-set-comparison--3max');
              cardSet.classList.add('ds-card-set--comparison__first');
              cardSet.classList.add('ds-card-set--comparison__last');
              cardSet.previousElementSibling.style.display = 'none';
              cardSet.nextElementSibling.style.display = 'none';
          }
    })
});