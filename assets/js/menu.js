'use strict'

{

  const menuContainer = document.querySelectorAll('.menu-container');
  let windowWidth = window.innerWidth;
  showMenu();


  function showMenu () {
    if(windowWidth > 1024){
      menuContainer.forEach(e => {
        e.children[1].classList.add('show-menu');
      });
    }else {
      menuContainer.forEach(e => {
        e.addEventListener('click', () => {
          e.children[1].classList.toggle('show-menu');
        });
      });
    }
  }
  

}