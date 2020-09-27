'use strict';

const setupField = document.querySelector('.setup');
const charactersField = setupField.querySelector('.setup-similar');
const wizardsList = document.querySelector('.setup-similar-list');
const wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

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

const wizards = [
  {
    name: WIZARDS_FIRST_NAME[getRandomNumber(0, WIZARDS_FIRST_NAME.length - 1)] + ' ' + WIZARDS_SECOND_NAME[getRandomNumber(0, WIZARDS_SECOND_NAME.length - 1)],

    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)],

    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARDS_FIRST_NAME[getRandomNumber(0, WIZARDS_FIRST_NAME.length - 1)] + ' ' + WIZARDS_SECOND_NAME[getRandomNumber(0, WIZARDS_SECOND_NAME.length - 1)],

    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)],

    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARDS_FIRST_NAME[getRandomNumber(0, WIZARDS_FIRST_NAME.length - 1)] + ' ' + WIZARDS_SECOND_NAME[getRandomNumber(0, WIZARDS_SECOND_NAME.length - 1)],

    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)],

    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARDS_FIRST_NAME[getRandomNumber(0, WIZARDS_FIRST_NAME.length - 1)] + ' ' + WIZARDS_SECOND_NAME[getRandomNumber(0, WIZARDS_SECOND_NAME.length - 1)],

    coatColor: COAT_COLORS[getRandomNumber(0, COAT_COLORS.length - 1)],

    eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)]
  },
];

const fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  let wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  fragment.appendChild(wizardElement);
}

wizardsList.appendChild(fragment);

charactersField.classList.remove('hidden');
