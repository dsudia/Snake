document.addEventListener('DOMContentLoaded', function() {
  Game();
});

function drawBorder (color) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = '#E28D05';
  context.strokeRect(0, 0, canvas.width, canvas.height);
}

function drawSnake (snake) {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var pixelSize = canvas.width / 25;
    for (i = 0; i < snake.snakeArray.length; i ++) {
      context.fillStyle = 'orange';
      context.fillRect(snake.snakeArray[i].x*pixelSize, snake.snakeArray[i].y*pixelSize, pixelSize, pixelSize);
      context.strokeStyle = 'white';
      context.strokeRect(snake.snakeArray[i].x*pixelSize, snake.snakeArray[i].y*pixelSize, pixelSize, pixelSize);
    }
}

var Snake = function() {
  var self = this;
  self.direction = 'right';
  self.snakeArray = [];
  self.length = 8;
    for (i = self.length; i >= 0; i--) {
      self.snakeArray.push({x: i, y: 0});
    }
};

function updateSnake(snake) {
  var noseX = snake.snakeArray[0].x;
  var noseY = snake.snakeArray[0].y;
    if (snake.direction === 'right') {
      noseX++;
    } else if (snake.direction === 'left') {
      noseX--;
    } else if (snake.direction === 'up') {
      noseY--;
    } else if (snake.direction === 'down') {
      noseY++;
    }

  var tail = snake.snakeArray.pop();
  tail.x = noseX;
  tail.y = noseY;
  snake.snakeArray.unshift(tail);
}

function Game() {
  var self = this;
  self.snake = new Snake();
  var interval = function() {
    drawBorder('red');
    drawSnake(self.snake);
    updateSnake(self.snake);


    setTimeout(function() {
      requestAnimationFrame(interval);
    }, 250);
  };
  interval();
}
