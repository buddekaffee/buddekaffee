'use strict';

{

  const windowWidth = window.innerWidth;

  if (windowWidth < 1024){
    animationMobile();
  }else {
    animationDesktop();
  }

  function animationDesktop() {
    ScrollReveal().reveal('.about-content',
    {
      distance: '200px',
      origin: 'bottom',
      delay: 0,
      opacity: 0,
      duration: 2000,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.about-coffee-container',
    {
      distance: '200px',
      origin: 'bottom',
      delay: 0,
      opacity: 0,
      duration: 2000,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.about-coffee-container2',
    {
      distance: '200px',
      origin: 'bottom',
      delay: 0,
      opacity: 0,
      duration: 2000,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.about-coffee-container3',
    {
      distance: '200px',
      origin: 'bottom',
      delay: 0,
      opacity: 0,
      duration: 2000,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.about-cake',
    {
      distance: '200px',
      origin: 'bottom',
      delay: 0,
      opacity: 0,
      duration: 2000,
      viewFactor: 0.3
    });
  }

  function animationMobile(){
    ScrollReveal().reveal('.about-coffee-photo',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.about-coffee-photo2',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.about-coffee-photo3',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.coffee-content',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.coffee-content2',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.coffee-content3',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.about-cake-photo',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
    ScrollReveal().reveal('.cake-content',
    {
      delay: 0,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      duration: 1500,
      viewFactor: 0.3
    });
  }


}
