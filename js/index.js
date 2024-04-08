'use strict';

// image carousel
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelector('.images');

let index = 0;

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.children.length) % slides.children.length;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.children.length;
  updateSlidePosition();
});

function updateSlidePosition() {
  const slideWidth = slides.children[0].offsetWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}