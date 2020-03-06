window.onload = () => {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext("2d");
  
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  
  function startGame() {
    window.requestAnimationFrame(carUpdate);

    // let road = new Image();
    // road.src = './images/road.png';
    // road.onload = () => {
    //   context.drawImage(road, 0, 0);
    // }

    // carUpdate();

    // interval = setInterval(car.carUpdate, 20);

  }
  class Component {
  constructor(x, y, width, height){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    moveLeft(){
      this.x -= 20;
      console.log('move left')
    }
  
    moveRight(){
      this.x += 20;
      console.log('move right')
    }
  }

  let car = new Component(115, 330, 50, 80);

  function carUpdate(){


    // "CLEAR" (BG)
    let road = new Image();
    road.src = './images/road.png';
    road.onload = () => {
      context.drawImage(road, 0, 0);
    }


    // PRINT O CARRO
    let carImg = new Image();
    carImg.src = './images/car.png';
    carImg.onload = () => {
      context.drawImage(carImg, car.x, car.y, car.width, car.height);
    }

    window.requestAnimationFrame(carUpdate);

  }
   
  
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: // left arrow
        car.moveLeft();
        break;
      case 39: // right arrow
        car.moveRight();
        break;
    }
  }

};


