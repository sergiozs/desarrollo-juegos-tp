Game = function(game){}
Game.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'background');

		video = this.game.add.video('video');

    	video.play(true);

    	video.addToWorld();
	}

}