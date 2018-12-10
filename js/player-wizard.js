'use strict';

(function () {
  var getRandomArrValue = window.util.getRandomArrValue;
  var setupPlayer = document.querySelector('.setup-player');
  var wizzardApearence = document.querySelector('.setup-wizard-appearance');
  var wizzardApearenceCoat = wizzardApearence.querySelector('.wizard-coat');
  var wizzardApearenceEyes = wizzardApearence.querySelector('.wizard-eyes');
  var wizzardApearenceFireball = setupPlayer.querySelector('.setup-fireball-wrap');


  wizzardApearenceCoat.addEventListener('click', function () {
    var elementColor = window.util.getRandomArrValue(window.util.wizardCoatColors);
    wizzardApearenceCoat.style.fill = elementColor;
    wizzardApearence.querySelector('[name = "coat-color"]').value = elementColor;
  });

  wizzardApearenceEyes.addEventListener('click', function () {
    var elementColor = getRandomArrValue(window.util.wizardEyeColors);
    wizzardApearenceEyes.style.fill = elementColor;
    wizzardApearence.querySelector('[name = "eyes-color"]').value = elementColor;
  });

  wizzardApearenceFireball.addEventListener('click', function () {
    var elementColor = getRandomArrValue(window.util.wizardFireballColors);
    wizzardApearenceFireball.style.backgroundColor = elementColor;
    wizzardApearenceFireball.querySelector('[name = "fireball-color"]').value = elementColor;
  });
})();
