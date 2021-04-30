var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin15;
var laser1, laser2;
var coinImg, redAni, greenAni, keyImg;
var plr1Count = 0;
var plr2Count = 0;
var PLAY = 1;
var END = 0;
var START1 = 2;
var START2 = 3;
var gameState = START1;
var coinG, wallG, playerG, borderG, laserG, colorG,allG;
var key1, key2;
var plrSpeed = 5;
var amt = 8;
var bls, grs, yes, res;
var plr1, plr2, name1, name2;

//END VARIABLES CREATE
function preload() {
  coinImg = loadImage("coin-removebg-preview.png");
  redAni = loadImage("redani.png");
  greenAni = loadImage("greenani.png");
  keyImg = loadImage("key.png");
}
//FUNCTION PRELOAD ENDED
function setup() {
  createCanvas(400,400);
  //Create Groups
  coinG = new Group();
  wallG = new Group();
  playerG = new Group();
  borderG = new Group();
  laserG = new Group();
  //End Create Groups
  createPlayers();
  createkeys();
  spawnCoins();
  createlaser();
  wallstuff();

  res = createSprite(350, 200, 90, 50);
  grs = createSprite(150, 200, 90, 50);
  yes = createSprite(250, 200, 90, 50);
  bls = createSprite(50, 200, 90, 50);
  bls.shapeColor="blue";
  grs.shapeColor="green";
  yes.shapeColor="yellow";
  res.shapeColor="red";
  colorG = new Group();
  colorG.add(bls);
  colorG.add(grs);
  colorG.add(yes);
  colorG.add(res);
}
//FUNCTION SETUP ENDED
function draw() {
  background(50);
  if (gameState === START1) {
    textSize(20);
    fill("white");
    text("PLAYER 1 - CHOOSE YOUR COLOR", 30, 100);

    bls.display();
    grs.display();
    yes.display();
    res.display();
    fill("black");
    text("1", 40, 205);
    text("2", 145, 205);
    text("3", 240, 205);
    text("4", 340, 205);
    if (keyWentDown("1")) {
      clear();
      plr1.shapeColor = "blue";
      name1="Blue";
      gameState = START2;
    }
    if (keyWentDown("2")) {
      clear();
      plr1.shapeColor = "green";
      name1="Green";
      gameState = START2;
    }
    if (keyWentDown("3")) {
      clear();
      plr1.shapeColor = "yellow";
      name1="Yellow";
      gameState = START2;
    }
    if (keyWentDown("4")) {
      clear();
      plr1.shapeColor = "red";
      name1="Red";
      gameState = START2;
    }
  }
  if(gameState === START2){
    textSize(20);
    fill("white");
    text("PLAYER 2 - CHOOSE YOUR COLOR", 30, 100);
    bls.display();
    grs.display();
    yes.display();
    res.display();
    fill("black");
    text("7", 40, 205);
    text("8", 145, 205);
    text("9", 240, 205);
    text("0", 340, 205);
    if (keyWentDown("7")) {
      clear();
        plr2.shapeColor = "blue";
        name2="Blue";
        gameState = PLAY;
      }
    if (keyWentDown("8")) {
      clear();
      plr2.shapeColor = "green";
      name2="Green";
      gameState = PLAY;
    }
    if (keyWentDown("9")) {
      clear();
      plr2.shapeColor = "yellow";
      name2="Yellow";
      gameState = PLAY;
    }
    if (keyWentDown("0")) {
      clear();
      plr2.shapeColor = "red";
      name2="Red";
      gameState = PLAY;
    }
  }
  if(gameState===PLAY||gameState===END){
    colorG.destroyEach();
    callMoveFromTouching();
    callKIB();
    callCoinCollected();
    border();
    won();
    keyRecieved();
    play();
    drawSprites();
  }
  reset();
}
//FUNCTION DRAW ENDED
function spawnCoins() {
  //Create and Format Coins
  coin1 = createSprite(random(15, 26), random(15, 385), 30, 30);
  coin1.addImage(coinImg);
  coin2 = createSprite(random(26, 54), random(100, 200), 30, 30);
  coin2.addImage(coinImg);
  coin3 = createSprite(random(54, 80), random(200, 300), 30, 30);
  coin3.addImage(coinImg);
  coin4 = createSprite(random(80, 106), random(300, 385), 30, 30);
  coin4.addImage(coinImg);
  coin5 = createSprite(random(106, 136), random(15, 100), 30, 30);
  coin5.addImage(coinImg);
  coin6 = createSprite(random(136, 162), random(100, 200), 30, 30);
  coin6.addImage(coinImg);
  coin7 = createSprite(random(162, 188), random(200, 300), 30, 30);
  coin7.addImage(coinImg);
  coin8 = createSprite(random(188, 214), random(300, 385), 30, 30);
  coin8.addImage(coinImg);
  coin9 = createSprite(random(214, 240), random(15, 100), 30, 30);
  coin9.addImage(coinImg);
  coin10 = createSprite(random(240, 266), random(100, 200), 30, 30);
  coin10.addImage(coinImg);
  coin11 = createSprite(random(266, 294), random(200, 300), 30, 30);
  coin11.addImage(coinImg);
  coin12 = createSprite(random(294, 320), random(300, 385), 30, 30);
  coin12.addImage(coinImg);
  coin13 = createSprite(random(320, 346), random(15, 100), 30, 30);
  coin13.addImage(coinImg);
  coin14 = createSprite(random(346, 372), random(100, 200), 30, 30);
  coin14.addImage(coinImg);
  coin15 = createSprite(random(372, 385), random(15, 385), 30, 30);
  coin15.addImage(coinImg);
  //End Create and Format Coins

  //Add Coins In To coinG
  coinG.add(coin1);
  coinG.add(coin2);
  coinG.add(coin3);
  coinG.add(coin4);
  coinG.add(coin5);
  coinG.add(coin6);
  coinG.add(coin7);
  coinG.add(coin8);
  coinG.add(coin9);
  coinG.add(coin10);
  coinG.add(coin11);
  coinG.add(coin12);
  coinG.add(coin13);
  coinG.add(coin14);
  coinG.add(coin15);
  //End Add Coins To coinG
  coinG.setScaleEach(0.15);
}

function plr1CoinCollected(plr, c) {
  if (plr.isTouching(c)) {
    plr1Count = plr1Count + 1;
    c.destroy();
  }
}

function plr2CoinCollected(plr, c) {
  if (plr.isTouching(c)) {
    plr2Count = plr2Count + 1;
    c.destroy();
  }
}

function callCoinCollected() {
  plr2CoinCollected(plr2, coin1);
  plr2CoinCollected(plr2, coin2);
  plr2CoinCollected(plr2, coin3);
  plr2CoinCollected(plr2, coin4);
  plr2CoinCollected(plr2, coin5);
  plr2CoinCollected(plr2, coin6);
  plr2CoinCollected(plr2, coin7);
  plr2CoinCollected(plr2, coin8);
  plr2CoinCollected(plr2, coin9);
  plr2CoinCollected(plr2, coin10);
  plr2CoinCollected(plr2, coin11);
  plr2CoinCollected(plr2, coin12);
  plr2CoinCollected(plr2, coin13);
  plr2CoinCollected(plr2, coin14);
  plr2CoinCollected(plr2, coin15);
  plr1CoinCollected(plr1, coin1);
  plr1CoinCollected(plr1, coin2);
  plr1CoinCollected(plr1, coin3);
  plr1CoinCollected(plr1, coin4);
  plr1CoinCollected(plr1, coin5);
  plr1CoinCollected(plr1, coin6);
  plr1CoinCollected(plr1, coin7);
  plr1CoinCollected(plr1, coin8);
  plr1CoinCollected(plr1, coin9);
  plr1CoinCollected(plr1, coin10);
  plr1CoinCollected(plr1, coin11);
  plr1CoinCollected(plr1, coin12);
  plr1CoinCollected(plr1, coin13);
  plr1CoinCollected(plr1, coin14);
  plr1CoinCollected(plr1, coin15);
}

function moveFromTouching(walll, coinn) {
  if (coinn.isTouching(walll)) {
    rand = Math.round(random(1, 2));
    if (rand === 1) {
      coinn.x = coinn.x + random(1, 15);
      coinn.y = coinn.y + random(1, 15);
    } else if (rand === 2) {
      coinn.x = coinn.x - random(1, 15);
      coinn.y = coinn.y - random(1, 15);
    }
  }
}

function callMoveFromTouching() {
  moveFromTouching(wallG, coin1);
  moveFromTouching(wallG, coin2);
  moveFromTouching(wallG, coin3);
  moveFromTouching(wallG, coin4);
  moveFromTouching(wallG, coin5);
  moveFromTouching(wallG, coin6);
  moveFromTouching(wallG, coin7);
  moveFromTouching(wallG, coin8);
  moveFromTouching(wallG, coin9);
  moveFromTouching(wallG, coin10);
  moveFromTouching(wallG, coin11);
  moveFromTouching(wallG, coin12);
  moveFromTouching(wallG, coin13);
  moveFromTouching(wallG, coin14);
  moveFromTouching(wallG, coin15);
  moveFromTouching(coinG, coin1);
  moveFromTouching(coinG, coin2);
  moveFromTouching(coinG, coin3);
  moveFromTouching(coinG, coin4);
  moveFromTouching(coinG, coin5);
  moveFromTouching(coinG, coin6);
  moveFromTouching(coinG, coin7);
  moveFromTouching(coinG, coin8);
  moveFromTouching(coinG, coin9);
  moveFromTouching(coinG, coin10);
  moveFromTouching(coinG, coin11);
  moveFromTouching(coinG, coin12);
  moveFromTouching(coinG, coin13);
  moveFromTouching(coinG, coin14);
  moveFromTouching(coinG, coin15);
  moveFromTouching(borderG, coin1);
  moveFromTouching(borderG, coin2);
  moveFromTouching(borderG, coin3);
  moveFromTouching(borderG, coin4);
  moveFromTouching(borderG, coin5);
  moveFromTouching(borderG, coin6);
  moveFromTouching(borderG, coin7);
  moveFromTouching(borderG, coin8);
  moveFromTouching(borderG, coin9);
  moveFromTouching(borderG, coin10);
  moveFromTouching(borderG, coin11);
  moveFromTouching(borderG, coin12);
  moveFromTouching(borderG, coin13);
  moveFromTouching(borderG, coin14);
  moveFromTouching(borderG, coin15);
  moveFromTouching(laserG, coin1);
  moveFromTouching(laserG, coin2);
  moveFromTouching(laserG, coin3);
  moveFromTouching(laserG, coin4);
  moveFromTouching(laserG, coin5);
  moveFromTouching(laserG, coin6);
  moveFromTouching(laserG, coin7);
  moveFromTouching(laserG, coin8);
  moveFromTouching(laserG, coin9);
  moveFromTouching(laserG, coin10);
  moveFromTouching(laserG, coin11);
  moveFromTouching(laserG, coin12);
  moveFromTouching(laserG, coin13);
  moveFromTouching(laserG, coin14);
  moveFromTouching(laserG, coin15);
  moveFromTouching(coinG, key1);
  moveFromTouching(coinG, key2);
  moveFromTouching(borderG, key1);
  moveFromTouching(borderG, key2);
}

function keepInBounds(coinn) {
  if (coinn.x < 5) {
    coinn.x = coinn.x + 15;
  }
  if (coinn.x > 395) {
    coinn.x = coinn.x - 15;
  }
  if (coinn.y < 5) {
    coinn.y = coinn.y + 15;
  }
  if (coinn.y > 395) {
    coinn.y = coinn.y - 15;
  }
}

function callKIB() {
  keepInBounds(coin1);
  keepInBounds(coin2);
  keepInBounds(coin3);
  keepInBounds(coin4);
  keepInBounds(coin5);
  keepInBounds(coin6);
  keepInBounds(coin7);
  keepInBounds(coin8);
  keepInBounds(coin9);
  keepInBounds(coin10);
  keepInBounds(coin11);
  keepInBounds(coin12);
  keepInBounds(coin13);
  keepInBounds(coin14);
  keepInBounds(coin15);
  keepInBounds(key1);
  keepInBounds(key2);
  playerG.collide(wallG);
}

function playerMovement() {
  if (keyDown("a")) {
    plr1.x = plr1.x - plrSpeed;
  }
  if (keyDown("s")) {
    plr1.y = plr1.y + plrSpeed;
  }
  if (keyDown("w")) {
    plr1.y = plr1.y - plrSpeed;
  }
  if (keyDown("d")) {
    plr1.x = plr1.x + plrSpeed;
  }
  if (keyDown("LEFT_ARROW")) {
    plr2.x = plr2.x - plrSpeed;
  }
  if (keyDown("RIGHT_ARROW")) {
    plr2.x = plr2.x + plrSpeed;
  }
  if (keyDown("UP_ARROW")) {
    plr2.y = plr2.y - plrSpeed;
  }
  if (keyDown("DOWN_ARROW")) {
    plr2.y = plr2.y + plrSpeed;
  }
}

function reset() {
  if (keyWentDown("r") && gameState === END) {
    plr1Count = 0;
    plr2Count = 0;
    playerG.setVisibleEach(true);
    plr1.x = 20;
    plr1.y = 20;
    plr2.x = 380;
    plr2.y = 380;
    wallG.setVisibleEach(true);
    createkeys();
    createlaser();
    spawnCoins();
    borderG.setColorEach(rgb(random(0, 255), random(0, 255), random(0, 255)));
    amt = 8;
    gameState = PLAY;
  }
}

function won() {
  if (plr2Count > amt - 1 || plr1Count > amt - 1) {
    gameState = END;
    textSize(50);
    //If Game Ended
    if (gameState === END) {
      //If Green Won
      if (plr2Count > amt - 1) {
        fill("white");
        text(name2+" Wins!", 55, 200);
      }
      //If Red Won
      else if (plr1Count > amt - 1) {
        fill("white");
        text(name1+" Wins!", 80, 200);
      }
      textSize(20);
      text("Press r to restart", 115, 235);
      plr1.visible = false;
      plr2.visible = false;
      coinG.destroyEach();
      wallG.setVisibleEach(false);
      laserG.destroyEach();
      key1.visible = false;
      key2.visible = false;
    }
  }
}

function play() {
  if(gameState === PLAY) {
    textSize(24);
    fill("white");
    text(name1+": "+plr1Count, 20, 380);
    fill("white");
    text(name2+": "+plr2Count, 120, 380);
    playerMovement();
  }
}

function border() {
  if (plr1.isTouching(laserG)) {
    plr1.x = 20;
    plr1.y = 20;
    if (plr1Count > 0) {
      plr1Count = plr1Count - 1;
      amt = amt - 0.5;
    }
  } else if (plr2.isTouching(laserG)) {
    plr2.x = 380;
    plr2.y = 380;
    if (plr2Count > 0) {
      plr2Count = plr2Count - 1;
      amt = amt - 0.5;
    }
  }
  if (plr1.isTouching(borderG)) {
    plr2Count = 8;
  } else if (plr2.isTouching(borderG)) {
    plr1Count = 8;
  }
}

function createlaser() {
  laser1 = createSprite(160, 140, 2, 85);
  laser2 = createSprite(190, 330, 75, 2);
  laserG.add(laser1);
  laserG.add(laser2);
  laserG.setColorEach("blue");
}

function createkeys() {
  var rand = Math.round(random(1, 2));
  var also = Math.round(random(1, 2));
  key1 = createSprite(150, 370, 50, 10);
  key2 = createSprite(250, 200, 50, 10);
  key1.addImage(keyImg);
  key2.addImage(keyImg);
  key1.scale = 0.1;
  key2.scale = 0.1;
  if (rand === 1) {
    key1.x = random(100, 300);
    key1.y = 370;
    if (also === 1) {
      key2.x = random(240, 310);
      key2.y = random(15, 385);
    } else if (also === 2) {
      key2.x = random(65, 130);
      key2.y = random(100, 385);
    }
  } else if (rand === 2) {
    key2.x = random(100, 300);
    key2.y = 370;
    if (also === 1) {
      key1.x = random(240, 310);
      key1.y = random(15, 385);
    } else if (also === 2) {
      key1.x = random(65, 130);
      key1.y = random(100, 385);
    }
  }
}

function keyRecieved() {
  if (playerG.isTouching(key1)) {
    laser1.destroy();
    key1.visible = false;
  }
  if (playerG.isTouching(key2)) {
    laser2.destroy();
    key2.visible = false;
  }
}

function createPlayers() {
  plr1 = createSprite(20, 20, 20, 20);
  //plr1.addImage(redAni);
  //plr1.scale=0.1;
  plr2 = createSprite(380, 380, 20, 20);
  //plr2.addImage(greenAni);
  //plr2.scale=0.1;
  playerG.add(plr1);
  playerG.add(plr2);
}

function wallstuff() {
  wall1 = createSprite(50, 100, 10, 200);
  wall2 = createSprite(350, 300, 10, 300);
  wall3 = createSprite(150, 260, 10, 150);
  wall4 = createSprite(230, 160, 10, 350);
  wall5 = createSprite(310, 100, 10, 100);
  wall6 = createSprite(105, 100, 120, 10);
  wall7 = createSprite(185, 185, 80, 10);
  wall8 = createSprite(105, 330, 100, 10);
  wall9 = createSprite(315, 250, 75, 10);
  wall10 = createSprite(315, 340, 75, 10);
  wall11 = createSprite(105, 250, 100, 10);
  wall12 = createSprite(0, 200, 10, 400);
  wall13 = createSprite(400, 200, 10, 400);
  wall14 = createSprite(200, 0, 400, 10);
  wall15 = createSprite(200, 400, 400, 10);
  wallG.add(wall1);
  wallG.add(wall2);
  wallG.add(wall3);
  wallG.add(wall4);
  wallG.add(wall5);
  wallG.add(wall6);
  wallG.add(wall7);
  wallG.add(wall8);
  wallG.add(wall9);
  wallG.add(wall10);
  wallG.add(wall11);
  borderG.add(wall12);
  borderG.add(wall13);
  borderG.add(wall14);
  borderG.add(wall15);
  // End Add Walls and Borders to Groups
  wallG.setColorEach(rgb(random(0, 200), random(0, 255), random(0, 200)));
  borderG.setColorEach(rgb(random(0, 255), random(0, 255), random(0, 255)));
}