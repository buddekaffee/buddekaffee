function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.menu-list').classList.toggle('show');
}

var mediaQuery = matchMedia('(min-width: 600px)');

handle(mediaQuery);

mediaQuery.addListener(handle);

function handle(mq) {
  if (mq.matches) {
      document.querySelector('.menu-list').classList.add('show');
    }else {
      document.querySelector('.menu-list').classList.remove('show');
    }
}