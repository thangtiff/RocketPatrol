let config = {
    type: Phaser.AUTO, 
    width: 640, 
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);
game.settings = {
    spaceshipSpeed: 3, 
    gameTimer: 60000
}
//reserve keyboard variables 
let keyF, keyLEFT, keyRIGHT;

