'use strict'

{
  
  const images = document.querySelector('.gallery-container').children;
  Array.from(images).forEach(e => {
    e.classList.add('images');
  });

  ScrollReveal().reveal('.images',
    {
      distance: '30px',
      origin: 'bottom',
      delay: 0,
      opacity: 0,
      duration: 800,
      viewFactor: 0.3
    });

}