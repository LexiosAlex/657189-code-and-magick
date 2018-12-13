'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setup = document.querySelector('.setup');
  var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var randomize = function () {
    return Math.random() - 0.5;
  };

  return {
    dialogSetup: setup,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    wizardFireballColors: wizardFireballColors,
    wizardCoatColors: wizardCoatColors,
    wizardEyeColors: wizardEyeColors,
    callIfIsEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    callIfIsEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    compareRandom: function () {
      return randomize();
    },
    getRandomArrValues: function (arr) {
      return arr.sort(randomize);
    },
    getRandomArrValue: function (arrName) {
      var length = arrName.length;
      return arrName[Math.floor(Math.random() * length)];
    }
  };
})();
