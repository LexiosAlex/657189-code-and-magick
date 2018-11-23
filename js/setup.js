'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizzardFirstNameArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizzardSurnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

function compareRandom() {
  return Math.random() - 0.5;
}

var getWizzardName = function (nameArr, surnameArr) {
  nameArr.sort(compareRandom);
  surnameArr.sort(compareRandom);
  var name = [];
  for (var i = 0; i < nameArr.length; i++) {
    name[i] = nameArr[i] + ' ' + surnameArr[i];
  }
  return name;
};

var wizzardName = getWizzardName(wizzardFirstNameArr, wizzardSurnameArr);

var wizzardCoatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizzardEyeColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomArrValue = function (arr) {
  return arr.sort(compareRandom);
};

var wizzardCoatColor = getRandomArrValue(wizzardCoatColorArr);
var wizzardEyeColor = getRandomArrValue(wizzardEyeColorArr);

var wizards = [
  {
    name: wizzardName[0],
    coatColor: wizzardCoatColor[0],
    eyesColor: wizzardEyeColor[0]
  },
  {
    name: wizzardName[1],
    coatColor: wizzardCoatColor[1],
    eyesColor: wizzardEyeColor[1]
  },
  {
    name: wizzardName[2],
    coatColor: wizzardCoatColor[2],
    eyesColor: wizzardEyeColor[2]
  },
  {
    name: wizzardName[3],
    coatColor: wizzardCoatColor[3],
    eyesColor: wizzardEyeColor[3]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
