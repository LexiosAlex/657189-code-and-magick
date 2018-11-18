'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_X = 150;
var BAR_Y = 100;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var LINE_GAP = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var winnerStatisticsText = [
  'Ура, вы победили!',
  'Список результатов:'
];

var renderStatiicsLine = function (ctx, StatisticText) {
  var lineX = CLOUD_X + 20;
  var lineY = CLOUD_Y + 35;

  ctx.font = '16px PT MONO';
  ctx.fillStyle = '#323232';

  for (var i = 0; i < StatisticText.length; i++) {
    ctx.fillText(StatisticText[i], lineX, lineY);
    lineY += LINE_GAP;
  }
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, player, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderStatiicsLine(ctx, winnerStatisticsText);

  ctx.font = '16px PT MONO';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < player.length; i++) {
    times[i] = Math.round(times[i]);
    ctx.fillStyle = '#323232';
    ctx.fillText(times[i], BAR_X + (BAR_GAP + BAR_WIDTH) * [i], BAR_Y - GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime);

    if (player[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0 , 1)';
    } else {
      var randomBlue = Math.floor(Math.random() * 255);
      ctx.fillStyle = 'rgba(0, 0, ' + randomBlue + ', 1)';
    }

    ctx.fillRect(BAR_X + (BAR_GAP + BAR_WIDTH) * [i], BAR_Y + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#323232';
    ctx.fillText(player[i], BAR_X + (BAR_GAP + BAR_WIDTH) * [i], BAR_Y + BAR_HEIGHT + GAP * 2);
  }
};
