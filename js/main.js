(function () {}
  var nav = document.querySelector('nav');
  var links = document.getElementsByTagName('a');

  nav.addEventListener('click', eventHandler, false);

  function eventHandler (e) {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    e.target.classList.add('active');
    e.preventDefault();
  }())
