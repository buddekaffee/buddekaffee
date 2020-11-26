'use strict';
{

  function animation(){
    ScrollReveal().reveal('.about-container',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
      viewFactor: 0.4
    });

    ScrollReveal().reveal('.menu-container',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
      viewFactor: 0.4
    });

    ScrollReveal().reveal('.gallery-images1',
    {
      delay: 400,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
    });
    ScrollReveal().reveal('.gallery-images2',
    {
      delay: 700,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
    });
    ScrollReveal().reveal('.gallery-images3',
    {
      delay: 400,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
    });
    ScrollReveal().reveal('.gallery-images4',
    {
      delay: 700,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
    });
    ScrollReveal().reveal('.gallery-images5',
    {
      delay: 400,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
    });
    ScrollReveal().reveal('.gallery-images6',
    {
      delay: 700,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
    });
    ScrollReveal().reveal('.gallery-more',
    {
      delay: 400,
      distance: '50px',
      origin: 'bottom',
      duration: 1200,
      easing: 'cubic-bezier(0, 0.23, 0.6, 2.12)'
    });
    ScrollReveal().reveal('.contact-container',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 3000,
      viewFactor: 0.3
    });
  };
  animation();

}
