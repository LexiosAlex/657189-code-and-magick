'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose =userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25 символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function(evt) {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function(evt) {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

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
var wizzardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomArrValues = function (arr) {
  return arr.sort(compareRandom);
};

var getRandomArrValue = function (arrName) {
  var length = arrName.length;
  return arrName[Math.floor(Math.random() * length)];
}

wizardCoatColors = getRandomArrValues(wizardCoatColors);
wizardEyeColors = getRandomArrValues(wizardEyeColors);

var wizards = [];

var getWizardsObj = function (amountOfwizards) {
  var wizardObjs = [];
  for (var i = 0; i < amountOfwizards; i++) {
    var wizardObj = {
      name: wizardNames[i],
      coatColor: wizardCoatColors[i],
      eyesColor: wizardEyeColors[i]
    };

    wizardObjs[i] = wizardObj;
  }

  return wizardObjs;
};

wizards = getWizardsObj(4);

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


var setupPlayer = document.querySelector('.setup-player');
var wizzardApearence = document.querySelector('.setup-wizard-appearance');
var wizzardApearenceCoat = wizzardApearence.querySelector('.wizard-coat');
var wizzardApearenceEyes = wizzardApearence.querySelector('.wizard-eyes');
var wizzardApearenceFireball = setupPlayer.querySelector('.setup-fireball-wrap');


wizzardApearenceCoat.addEventListener('click', function(evt) {
  var elementColor = getRandomArrValue(wizardCoatColors);
  wizzardApearenceCoat.style.fill = elementColor;
  wizzardApearence.querySelector('[name = "coat-color"]').value = elementColor;
});

wizzardApearenceEyes.addEventListener('click', function(evt) {
  var elementColor = getRandomArrValue(wizardEyeColors);
  wizzardApearenceEyes.style.fill = elementColor;
  wizzardApearence.querySelector('[name = "eyes-color"]').value = elementColor;
});



wizzardApearenceFireball.addEventListener('click', function(evt) {
  var elementColor = getRandomArrValue(wizzardFireballColors);
  wizzardApearenceFireball.querySelector('[name = "fireball-color"]').value = elementColor;
});

// wizzardApearence.querySelector('wizard-coat').style.fill =
