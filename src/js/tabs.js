'use strict';

const menuItemsNode = document.querySelectorAll('.menu__item'),
  btnMenuContainerNode = document.querySelector('.menu-categories'),
  btnMenuNode = document.querySelectorAll('.btn-tab');

btnMenuContainerNode.addEventListener('click', function (e) {
  const closestClicked = e.target.closest('.btn');
  if (!closestClicked) return;

  btnMenuNode.forEach(item => {
    item.classList.remove('btn_active');
    closestClicked.classList.add('btn_active');
  });

  menuItemsNode.forEach(item => {
    item.classList.remove('menu_active');
    document
      .querySelector(`.menu__item--${closestClicked.dataset.tab}`)
      .classList.add('menu_active');
  });
});
