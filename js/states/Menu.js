Menu = function(game){}
Menu.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'menu-bg');

		button1 = this.game.add.button(0,0,'btn',this.goGame,this);
		button1.x = this.game.width*0.25;
		button1.y = this.game.height*0.25;
		button1.anchor.setTo(0.5);

		button2 = this.game.add.button(0,0,'btn',this.goGame,this);
		button2.x = this.game.width*0.75;
		button2.y = this.game.height*0.25;
		button2.anchor.setTo(0.5);

		button3 = this.game.add.button(0,0,'btn',this.goGame,this);
		button3.x = this.game.width*0.25;
		button3.y = this.game.height*0.75;
		button3.anchor.setTo(0.5);

		button4 = this.game.add.button(0,0,'btn',this.goGame,this);
		button4.x = this.game.width*0.75;
		button4.y = this.game.height*0.75;
		button4.anchor.setTo(0.5);
	},
	goGame:function(){
		this.game.state.start("Game");
	}
}