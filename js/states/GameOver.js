GameOver = function(){}

GameOver.prototype = {
	init:function(_score){
		score = _score;
	},
	create:function(){
		background = this.game.add.sprite(0,0,'gameover');
		
		if (localStorage.length == 0 || localStorage.getItem(localStorage.key(0)) > score) {
			localStorage.clear();
			var player = prompt("ENTER YOUR NAME:");
			localStorage.setItem(player,score);
		}
		LSplayer = localStorage.key(0);
		LSscore = localStorage.getItem(LSplayer);

		bestTime = this.game.add.text(this.game.width * 3 / 16,this.game.world.centerY-50,"-BEST TIME-\n"+LSplayer+"  >>>  "+LSscore);
		bestTime.fontSize = 60;
		bestTime.align = "center";
		bestTime.anchor.setTo(0.5);

		hover = this.game.add.sound('hover');
		selected = this.game.add.sound('selected');

		playagain = this.game.add.button(this.game.width * 3 / 16,this.game.height-120,'playagain',this.goMenu,this);
		playagain.anchor.setTo(0.5);
		playagain.scale.setTo(0.5);
		playagain.onOverSound = hover;
	},
	goMenu:function(){
		selected.play();
		this.game.state.start('Menu');
	}

}