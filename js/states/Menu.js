Menu = function(game){}
Menu.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'menu');

		px = this.game.width * 5 / 16;
		py = this.game.height / 8;
		button1 = this.game.add.button(px,py,'btn1',function(){this.goGame('dragonball1')},this);
		button1.anchor.setTo(0.5);

		button2 = this.game.add.button(px,py*3,'btn2',function(){this.goGame('dragonball2')},this);
		button2.anchor.setTo(0.5);

		button3 = this.game.add.button(px,py*5,'btn3',function(){this.goGame('dragonball3')},this);
		button3.anchor.setTo(0.5);

		button4 = this.game.add.button(px,py*7,'btn4',function(){this.goGame('dragonball4')},this);
		button4.anchor.setTo(0.5);
	},
	goGame:function(dragonball){
		this.game.state.start("Game",true,false,dragonball);
	}
}