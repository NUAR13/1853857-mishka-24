'use strict';

const nav = document.querySelector('.navigation__wrapper');
const menuBtn = document.querySelector('.navigation__toogle');

if (menuBtn) {
  menuBtn.addEventListener('click', function (item) {
    item.preventDefault();
    nav.classList.toggle('navigation--open');
  })
}

document.querySelectorAll('.navigation .no-js').forEach(n => n.classList.remove('no-js'));
document.querySelectorAll('.navigation .no-js-tog').forEach(n => n.classList.remove('no-js-tog'));
document.querySelectorAll('.contacts .no-js-map').forEach(n => n.classList.remove('no-js-map'));
