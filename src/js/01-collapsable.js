'use strict';
//const sectionElement = document.querySelector('.js-collapsable');
const headerElements = document.querySelectorAll('.collapsable__header');

for ( const element of headerElements) {
  element.addEventListener ('click', collapsableHandler);
}

function collapsableHandler (event) {
  const sectionElement = event.currentTarget.closest('.js-collapsable');
  sectionElement.classList.toggle('collapsed');
}

//headerElement.addEventListener ('click', collapsableHandler);