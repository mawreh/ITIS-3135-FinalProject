document.addEventListener('DOMContentLoaded', function() {
  // get buttons
  const leftBtn = document.querySelector('.left');
  const rightBtn = document.querySelector('.right');

  // get carousel items
  const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
  const CAROUSEL_SIZE = carouselItems.length;

  // keep track of which images are currently selected
  // using active class
  leftBtn.addEventListener('click', swipe);
  rightBtn.addEventListener('click', swipe);

  // swipe function takes (e) as the event argument
  function swipe(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);
    let nextIndex;

    if (e.currentTarget.classList.contains('left')) {
      if (currentIndex === 0) {
        nextIndex = CAROUSEL_SIZE - 1;
      } else {
        nextIndex = currentIndex - 1;
      }
    } else {
      if (currentIndex === CAROUSEL_SIZE - 1) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
    }

    carouselItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    carouselItems[currentIndex].classList.remove('active');
  }
});
