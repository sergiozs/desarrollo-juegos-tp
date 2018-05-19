Preload = function(game){}
Preload.prototype = {
	preload:function(){
		this.game.load.image('background','assets/background.jpg');
		this.game.load.image('btn','assets/btn.jpg');
		this.game.load.image('menu-bg','assets/menu-bg.jpg');

		this.game.load.video('video', 'assets/naruto.mp4');

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
	},
	create:function(){
		this.game.state.start('Menu');
	}
}


