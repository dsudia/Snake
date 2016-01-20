document.addEventListener('DOMContentLoaded', function() {
  drawBorder();
});

function drawBorder (color) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  context.strokeStyle = '#E28D05';
  context.lineWidth = 10;
  context.strokeRect(0,0, canvas.width, canvas.height);
}

function drawSnake () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var pixelSize = canvas.width / 25;
    for (i = 0; i < 8; i ++) {
      context.fillStyle = 'orange';
      context.fillRect(i.pixelSize, 0, pixelSize, pixelSize);
      context.strokeStyle = 'white';
      context.strokeRect(i*pixelSize, 0, pixelSize, pixelSize);
    }
}

function Game() {
  var interval = function() {
    drawBorder('red');
    drawSnake();



    setTimeOut(function() {
      requestAnimationFrame(interval);
    }, 250);
  };
}
