var canvas;
var player,monster,ghost,background;
var playerImg,backgroundImg,monsterImg,ghostImg;
var monsterGroup;


function preload(){
    playerImg = loadAnimation('link-01.png','link-02.png','link-03.png','link-04.png','link-05.png','link-06.png','link-07.png','link-08.png','link-09.png','link-10.png')
    backgroundImg = loadImage('background.png');
    monsterImg = loadAnimation('monster_01.png','monster_02.png','monster_03.png','monster_04.png','monster_05.png')
    ghostImg = loadAnimation('ghost01.png','ghost02.png','ghost03.png','ghost04.png','ghost05.png','ghost06.png','ghost07.png','ghost08.png',)
}


function setup(){
    canvas = createCanvas(windowWidth, windowHeight)
    background = createSprite(windowWidth/2,-100);
    background.addImage(backgroundImg);
    background.scale = 4;

    background.velocityX = -4;

   
    
    //criando o player 
    player = createSprite(windowWidth/5,windowHeight-100,50,50)
    player.addAnimation('link',playerImg);
    player.scale = 2;
}


function draw(){

    if(background.x < 0){
        background.x = windowWidth/2;
    }

    spawnMonster();
    drawSprites();
}

function spawnMonster(){
  if(frameCount % 100 == 0){ 
    var monster = createSprite(windowWidth+20,windowHeight-100,50,50);
    monster.velocityX = -6;
    var num = Math.round(random(1,2));
    switch(num){
        case 1:monster.addAnimation('monster',monsterImg);
        break;
        case 2:monster.addAnimation('ghost',ghostImg);
        break;
        default: break;
    }
  }
}
