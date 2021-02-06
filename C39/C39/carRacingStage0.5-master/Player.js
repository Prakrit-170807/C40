class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('Players');
    playerCountRef.on("value",(data)=>{
      Players = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      Players: count
    });
  }

  update(){
    var playerIndex = "playersall/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('playersall');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
