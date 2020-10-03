'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const MAX_BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const TEXT_HEIGHT = 40;
const RESULT_TEXT = 20;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomSaturate = function () {
  return 'hsl(240, ' + getRandom(1, 100) + '%, 40%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(
      'Ура вы победили!',
      CLOUD_X + BAR_GAP,
      CLOUD_Y + RESULT_TEXT
  );
  ctx.fillText(
      'Список результатов:',
      CLOUD_X + BAR_GAP,
      CLOUD_Y + RESULT_TEXT * 2
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - 2 * GAP - TEXT_HEIGHT + (-MAX_BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT + GAP
    );

    ctx.fillStyle = names[i] === 'Вы'
      ? 'rgba(255, 0, 0, 1)'
      : getRandomSaturate();

    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT,
        BAR_WIDTH,
        (-MAX_BAR_HEIGHT * times[i]) / maxTime
    );

    ctx.fillStyle = '#000';
  }
};
