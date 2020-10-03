'use strict';

const setupField = document.querySelector('.setup');
const wizardsListField = setupField.querySelector('.setup-similar');
const wizardsListContainer = document.querySelector('.setup-similar-list');
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
  return getRandomValue(WIZARDS_FIRST_NAME)
  + ' '
  + getRandomValue(WIZARDS_SECOND_NAME);
};

const getFakeWizard = function () {
  const wizardName = getRandomName();
  const wizardCoat = getRandomValue(COAT_COLORS);
  const wizardEyes = getRandomValue(EYES_COLORS);
  return [wizardName, wizardCoat, wizardEyes];
};

const getFakeWizardElement = function (wizard) {
  const fakeWizardElement = wizardTemplate.cloneNode(true);
  fakeWizardElement.querySelector('.setup-similar-label').textContent = wizard[0];
  fakeWizardElement.querySelector('.wizard-coat').style.fill = wizard[1];
  fakeWizardElement.querySelector('.wizard-eyes').style.fill = wizard[2];
  return fakeWizardElement;
};

const fragment = document.createDocumentFragment();

const getFakeWizardsList = function (quantity) {
  for (let i = 0; i < quantity; i++) {
    const fakeWizard = getFakeWizard();
    const wizardElement = getFakeWizardElement(fakeWizard);
    fragment.appendChild(wizardElement);
  }
  return fragment;
};

const randomWizards = getFakeWizardsList(WIZARDS_QUANTITY);

wizardsListContainer.appendChild(randomWizards);

wizardsListField.classList.remove('hidden');
