var canvas, backgroundImage;

var GameMode = 0;
var Players;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4,Cars
var car1_,car2_,car3_,car4_,track_
var form, player, game;

function preload(){
  car1_=loadImage('car1.png')
  car2_=loadImage('car2.png')
  car3_=loadImage('car3.png')
  car4_=loadImage('car4.png')
  track_=loadImage('track.jpg')
  
}

function setup(){
  canvas = createCanvas(windowWidth-25,windowHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(Players === 4){
    game.update(1);
  }
  if(GameMode === 1){
    clear();
    game.play();
  }
  
 
}
