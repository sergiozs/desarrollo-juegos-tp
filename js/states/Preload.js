Preload = function(game){}
Preload.prototype = {
	preload:function(){
		this.game.load.image('background','assets/background.jpg');
		/*this.game.load.image('btn1','assets/db1.png');
		this.game.load.image('btn2','assets/db2.png');
		this.game.load.image('btn3','assets/db3.png');
		this.game.load.image('btn4','assets/db4.png');*/
		this.game.load.image('gameover','assets/gameover.jpg');
		this.game.load.image('menu','assets/menu2.jpg');
		this.game.load.image('blacklayer','assets/blacklayer.png');
		this.game.load.image('playagain','assets/playagain.png');

		this.game.load.spritesheet('ss1','assets/ss1.png',450,209);
		this.game.load.spritesheet('ss2','assets/ss2.png',450,200);
		this.game.load.spritesheet('ss3','assets/ss3.png',490,151);
		this.game.load.spritesheet('ss4','assets/ss4.png',450,202);
		
		this.game.load.audio('lobby', 'assets/lobby.ogg');
		this.game.load.audio('hover', 'assets/hover.ogg');
		this.game.load.audio('selected', 'assets/selected.wav');

		this.game.load.video('dragonball1', 'assets/dragonball1.webm');
		this.game.load.video('dragonball2', 'assets/dragonball2.webm');
		this.game.load.video('dragonball3', 'assets/dragonball3.webm');
		this.game.load.video('dragonball4', 'assets/dragonball4.webm');

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
	},
	create:function(){
		this.game.state.start('Menu');
	}
}


