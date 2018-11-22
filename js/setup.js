'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizzardFirstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizzardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var getWizzardName = function(nameArr, surnameArr) {
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  };

  nameArr.sort(compareRandom);
  surnameArr.sort(compareRandom);
  var Name = [];
  for (var i = 0; i < nameArr.length; i++){
    Name[i] = nameArr[i] + ' ' +  surnameArr[i];
  }
  return Name;
}

var wizzardName = getWizzardName(wizzardFirstName, wizzardSurname);

var wizzardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizzardEyeColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomArrValue = function(arr) {
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  };

  return arr.sort(compareRandom);
}

var wizards = [
  {
    name: wizzardName[0],
    coatColor: getRandomArrValue(wizzardCoatColor)[0],
    eyesColor: getRandomArrValue(wizzardEyeColor)[0]
  },
  {
    name: wizzardName[1],
    coatColor: getRandomArrValue(wizzardCoatColor)[1],
    eyesColor: getRandomArrValue(wizzardEyeColor)[1]
  },
  {
    name: wizzardName[2],
    coatColor: getRandomArrValue(wizzardCoatColor)[2],
    eyesColor: getRandomArrValue(wizzardEyeColor)[2]
  },
  {
    name: wizzardName[3],
    coatColor: getRandomArrValue(wizzardCoatColor)[3],
    eyesColor: getRandomArrValue(wizzardEyeColor)[3]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
