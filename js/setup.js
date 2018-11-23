'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardFirstNameArr = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

function compareRandom() {
  return Math.random() - 0.5;
}

var getFullNames = function (nameArr, surnameArr) {
  nameArr.sort(compareRandom);
  surnameArr.sort(compareRandom);
  var objectNames = [];
  for (var i = 0; i < nameArr.length; i++) {
    objectNames[i] = nameArr[i] + ' ' + surnameArr[i];
  }
  return objectNames;
};

var wizardNames = getFullNames(wizardFirstNameArr, wizardSurnameArr);

var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyeColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomArrValue = function (arr) {
  return arr.sort(compareRandom);
};

var wizardCoatColors = getRandomArrValue(wizardCoatColors);
var wizardEyeColors = getRandomArrValue(wizardEyeColors);

var wizardObj = {
  name: null,
  coatColor: null,
  eyesColor: null
}

var wizards = [];

var getWizardsObj = function (amountOfwizards) {
  var wizardObjs = []; //Я не понимаю, почему, но он меняет все значения в массиве. Хотя я задумывал, что он будет пересчитывать
    for (var i = 0; i < amountOfwizards; i++ ) {
      wizardObj.name = wizardNames[i];
      wizardObj.coatColor = wizardCoatColors[i];
      wizardObj.eyesColor = wizardEyeColors[i];
      wizardObjs[i] = wizardObj
    }
    return wizardObjs
  }

wizards = getWizardsObj(4);


// var wizards = [
//   {
//     name: wizardName[0],
//     coatColor: wizardCoatColor[0],
//     eyesColor: wizardEyeColor[0]
//   },
//   {
//     name: wizardName[1],
//     coatColor: wizardCoatColor[1],
//     eyesColor: wizardEyeColor[1]
//   },
//   {
//     name: wizardName[2],
//     coatColor: wizardCoatColor[2],
//     eyesColor: wizardEyeColor[2]
//   },
//   {
//     name: wizardName[3],
//     coatColor: wizardCoatColor[3],
//     eyesColor: wizardEyeColor[3]
//   }
// ];


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
