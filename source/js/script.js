'use strict';

const nav = document.querySelector('.navigation__wrapper');
const menuBtn = document.querySelector('.navigation__toogle');

if (menuBtn) {
  menuBtn.addEventListener('click', function (item) {
    item.preventDefault();
    nav.classList.toggle('navigation--open');
  })
}
