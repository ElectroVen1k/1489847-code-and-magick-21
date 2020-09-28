'use strict';

const setupField = document.querySelector('.setup');
const charactersField = setupField.querySelector('.setup-similar');
const wizardsList = document.querySelector('.setup-similar-list');
const wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const WIZARDS_QUANTITY = 4;

const WIZARDS_FIRST_NAME = ['Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

const WIZARDS_SECOND_NAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

const COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

const EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

setupField.classList.remove('hidden');

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomValue = function (value) {
  return value[getRandomNumber(0, value.length - 1)];
};

const getRandomName = function () {
  let name = getRandomValue(WIZARDS_FIRST_NAME)
  + ' '
  + getRandomValue(WIZARDS_SECOND_NAME);
  return name;
};

const getFakeWizard = function () {
  let wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomName();
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomValue(COAT_COLORS);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomValue(EYES_COLORS);
  return wizardElement;
};

const getFakeWizardsList = function () {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < WIZARDS_QUANTITY; i++) {
    fragment.appendChild(getFakeWizard());
  }

  wizardsList.appendChild(fragment);
};

getFakeWizardsList();

charactersField.classList.remove('hidden');
