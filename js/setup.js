'use strict';

const setupField = document.querySelector('.setup');
const buttonOpenSetup = document.querySelector('.setup-open');
const buttonCloseSetup = setupField.querySelector('.setup-close');
const nameInput = setupField.querySelector('.setup-user-name');
const coatColorInput = setupField.querySelector('input[name=coat-color]');
const eyesColorInput = setupField.querySelector('input[name=eyes-color]');
const fireballColorInput = setupField.querySelector('input[name=fireball-color]');
const setupFireballElement = setupField.querySelector('.setup-fireball-wrap');
const setupEyesElement = setupField.querySelector('.wizard-eyes');
const setupCoatElement = setupField.querySelector('.wizard-coat');
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

const FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

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
  return {
    name: wizardName,
    coat: wizardCoat,
    eyes: wizardEyes
  };
};

const getFakeWizardElement = function (wizard) {
  const fakeWizardElement = wizardTemplate.cloneNode(true);
  fakeWizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  fakeWizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  fakeWizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
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

const onSetupFieldEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closeSetupBlock();
  }
};

const onSetupFieldButtonClosePress = function (evt) {
  if (evt.key === 'Enter') {
    closeSetupBlock();
  }
};

const inFocusNameInputEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

const openSetupBlock = function () {
  setupField.classList.remove('hidden');
  buttonCloseSetup.addEventListener('keydown', onSetupFieldButtonClosePress);
  buttonCloseSetup.addEventListener('click', closeSetupBlock);
  document.addEventListener('keydown', onSetupFieldEscPress);
  nameInput.addEventListener('keydown', inFocusNameInputEscPress);
  setupCoatElement.addEventListener('click', swapCoatColor);
  setupEyesElement.addEventListener('click', swapEyesColor);
  setupFireballElement.addEventListener('click', swapFireballColor);
};

const closeSetupBlock = function () {
  setupField.classList.add('hidden');
  document.removeEventListener('keydown', onSetupFieldEscPress);
  buttonCloseSetup.removeEventListener('keydown', onSetupFieldButtonClosePress);
  buttonCloseSetup.removeEventListener('click', closeSetupBlock);
  nameInput.removeEventListener('keydown', inFocusNameInputEscPress);
  setupCoatElement.removeEventListener('click', swapCoatColor);
  setupEyesElement.removeEventListener('click', swapEyesColor);
  setupFireballElement.removeEventListener('click', swapFireballColor);
};

buttonOpenSetup.addEventListener('click', function () {
  openSetupBlock();
});

buttonOpenSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openSetupBlock();
  }
});
//

const swapCoatColor = function () {
  let currentIndex = COAT_COLORS.indexOf(coatColorInput.value);
  if (currentIndex < COAT_COLORS.length - 1) {
    setupCoatElement.style.fill = COAT_COLORS[currentIndex + 1];
    coatColorInput.value = COAT_COLORS[currentIndex + 1];
  } else {
    setupCoatElement.style.fill = COAT_COLORS[0];
    coatColorInput.value = COAT_COLORS[0];
  }
};

const swapEyesColor = function () {
  let currentIndex = EYES_COLORS.indexOf(eyesColorInput.value);
  if (currentIndex < EYES_COLORS.length - 1) {
    setupEyesElement.style.fill = EYES_COLORS[currentIndex + 1];
    eyesColorInput.value = EYES_COLORS[currentIndex + 1];
  } else {
    setupEyesElement.style.fill = EYES_COLORS[0];
    eyesColorInput.value = EYES_COLORS[0];
  }
};

const swapFireballColor = function () {
  let currentIndex = FIREBALL_COLORS.indexOf(fireballColorInput.value);
  if (currentIndex < FIREBALL_COLORS.length - 1) {
    setupFireballElement.style.backgroundColor = FIREBALL_COLORS[currentIndex + 1];
    fireballColorInput.value = FIREBALL_COLORS[currentIndex + 1];
  } else {
    setupFireballElement.style.backgroundColor = FIREBALL_COLORS[0];
    fireballColorInput.value = FIREBALL_COLORS[0];
  }
};
