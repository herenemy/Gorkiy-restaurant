'use strict';
const menuWrapper = document.querySelectorAll('.menu__wrapper');

getResource('menu.json').then(data => createCards(data));

async function getResource(url) {
  const data = await fetch(url);

  if (!data.ok) {
    throw new Error(`Could not fetch ${url}. Error status ${data.status} `);
  }

  return await data.json();
}

function createCards(resource) {
  menuWrapper.forEach(wrapper => {
    const foodCategoryName = wrapper.getAttribute('data-menu');
    console.log(foodCategoryName);

    resource[foodCategoryName].forEach(item => {
      if (foodCategoryName === 'fashionCoctail') {
        wrapper.innerHTML += `
        <li class="dish__item dish__item-coctail">
              <img src="${item.photo}" alt="">
              <div class="dish__content dish__content_coctail">
                  <div class="dish__name dish__name-coctail">${item.title}</div>
                  <div class="dish-small-in">${item.name}</div>
                  <div class="dish__small-text">
                      <div class="dish-small">${item.portion}мл</div>
                      <div class="dish-small">${item.price}₽</div>
                  </div>
              </div>
          </li>
        `;
      } else {
        wrapper.innerHTML += `
        <li class="dish__item">
                  <img src="${item.photo}" alt="">
                  <div class="dish__content">
                      <div class="dish__name">${item.name}</div>
                      <div class="dish__small-text">
                          <div class="dish-small">${item.portion}${
          item.portionType === 'ml' ? 'мл' : 'гр'
        }</div>
                          <div class="dish-small">${item.price}₽</div>
                      </div>
                  </div>
              </li>
        `;
      }
    });
  });
}
