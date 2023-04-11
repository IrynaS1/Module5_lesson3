'use strict';

const listFunction = () => {
  const ulElement = document.querySelector('.list');

  const userAnswer = prompt('Enter text', '');

  const addListElement = (userAnswer) => {
    const newListElement = document.createElement('li');
    newListElement.classList.add('list__item');
    ulElement.appendChild(newListElement);
    newListElement.innerHTML = userAnswer;
  };

  if (userAnswer === 'exit' || userAnswer === null) {
    return alert('Exit');
  } else if (userAnswer === 'del') {
    const listElements = document.querySelectorAll('.list__item');
    return listElements[listElements.length - 1].remove();
  } else if (userAnswer === 'clear') {
    const elements = document.querySelectorAll('.list__item');
    return elements.remove();
  } else if (userAnswer === '' || userAnswer === ' ') {
    listFunction();
  } else {
    addListElement(userAnswer);
  }
  listFunction();
};

listFunction();


