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

function Game() {
  var interval = function() {
    drawBorder('red');




    setTimeOut(function() {
      requestAnimationFrame(interval);
    }, 250);
  };
}