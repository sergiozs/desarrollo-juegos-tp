Menu = function(game){}
Menu.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'menu');

		lobby = this.game.add.sound('lobby');
		lobby.loop = true;
		lobby.volume = 0.4;
		lobby.play();

		hover = this.game.add.sound('hover');
		selected = this.game.add.sound('selected');

		px = this.game.width * 5 / 16;
		py = this.game.height / 8;
		button1 = this.game.add.button(px,py+50,'ss1',function(){this.goGame('dragonball1')},this,0,1);
		button1.anchor.setTo(0.5);
		button1.onOverSound = hover;

		button2 = this.game.add.button(px,py*3+50,'ss2',function(){this.goGame('dragonball2')},this,0,1);
		button2.anchor.setTo(0.5);
		button2.onOverSound = hover;

		button3 = this.game.add.button(px,py*5,'ss3',function(){this.goGame('dragonball3')},this,0,1);
		button3.anchor.setTo(0.5);
		button3.onOverSound = hover;

		button4 = this.game.add.button(px,py*7-30,'ss4',function(){this.goGame('dragonball4')},this,0,1);
		button4.anchor.setTo(0.5);
		button4.onOverSound = hover;
	},
	goGame:function(dragonball){
		lobby.stop();
		selected.play();
		this.game.state.start("Game",true,false,dragonball);
	}
}