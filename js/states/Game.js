Game = function(game){}
Game.prototype = {
	init:function(_dragonball){
		dragonball = _dragonball;
	},
	create:function(){
		elapsed = 0;
		background = this.game.add.sprite(0,0,'background');
		background.scale.setTo(108/72);

		video = this.game.add.video(dragonball);

    	video.addToWorld(this.game.world.centerX, this.game.world.centerY, 0.5, 0.5, 1, 1);

    	video.play();

    	progreso = this.game.add.text(this.game.world.centerX, this.game.height - 80, "Video Progress: 0%");
    	progreso.fill = "#F2F5CA";
		progreso.fontSize = 50;
		progreso.anchor.setTo(0.5);

		tiempo = this.game.add.text(this.game.width - 50, 50, "Time: 0.000");
    	tiempo.fill = "#F2F5CA";
		tiempo.fontSize = 50;
		tiempo.anchor.setTo(1,0);
	},
	update:function(){
		elapsed += this.game.time.elapsed;
		if(elapsed>500){
			progreso.text = "Video Progress: " + Math.round(video.progress * 100) + "%";
			elapsed = 0;
		}
		tiempo.text = "Time: " + this.game.time.totalElapsedSeconds().toFixed(3);
	}

}