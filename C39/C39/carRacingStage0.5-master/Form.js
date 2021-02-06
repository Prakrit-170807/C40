class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.Restart = createButton("PLAY THE GAME AGAIN")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      Players+=1;
      player.index = Players;
      player.update();
      player.updateCount(Players);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

    this.Restart.position(50,20)
    this.Restart.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      database.ref("/").update({
        playersall:null
      })
    })
  }
}
