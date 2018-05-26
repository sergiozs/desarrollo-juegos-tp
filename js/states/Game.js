Game = function(game){}
Game.prototype = {
	init:function(_dragonball) {
		dragonball = _dragonball;
	},
	create:function() {
		act = 0;
		tiempo = null;
		progreso = null;
		elapsed = 0;
		elapsedGame = 0;
		speed = 0;
		score = 0;
		background = this.game.add.sprite(0,0,'background');
		background.scale.setTo(108/72);

		video = this.game.add.video(dragonball);

		video.onComplete.add(function(){
			this.game.state.start("GameOver",true,false,score);
		},this);

		video.addToWorld(this.game.world.centerX, this.game.world.centerY, 0.5, 0.5, 1, 1);

		spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spacebar.onDown.add(this.jugar,this);
		this.game.input.onTap.add(this.jugar,this);

		blacklayer = this.game.add.sprite(0,0,'blacklayer');

		pressx = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 
			"HOW TO PLAY:\nTap repeatedly\n\n-SPACEBAR-\nor\n-Left Click-");
		pressx.fill = "#F2F5CA";
		pressx.fontSize = 80;
		pressx.align = "center";
		pressx.anchor.setTo(0.5);
		
	},
	update:function() {
		if(act){
			elapsedGame += this.game.time.elapsed;
			elapsed += this.game.time.elapsed;
			if(elapsed > 200 && speed > 0){
				speed = speed - 1;
				elapsed = 0;
			}
			vel = speed / 10;
			video.playbackRate = vel;

			velocidad.text = "SPEED\nx" + vel.toFixed(1);

			progreso.text = "Video Progress: " + Math.round(video.progress * 100) + "%";
			
			score = elapsedGame / 1000;
			tiempo.text = "Time: " + score.toFixed(3);

		}
		
	},
	jugar:function() {
		act = 1;

		spacebar.onDown.remove(this.jugar,this);
		this.game.input.onTap.remove(this.jugar,this);

		pressx.kill();
		blacklayer.destroy();

		video.playbackRate = 0;
		video.play();

		spacebar.onDown.add(this.faster,this);
		this.game.input.onTap.add(this.faster,this);

		progreso = this.game.add.text(this.game.world.centerX, this.game.height - 80, "Video Progress: 0%");
		progreso.fill = "#F2F5CA";
		progreso.fontSize = 60;
		progreso.anchor.setTo(0.5);

		tiempo = this.game.add.text(this.game.width - 400, 50, "Time: 0.000");
		tiempo.fill = "#F2F5CA";
		tiempo.fontSize = 50;

		velocidad = this.game.add.text(60, this.game.world.centerY, "SPEED\nx0.0");
		velocidad.fill = "#F2F5CA";
		velocidad.fontSize = 60;
		velocidad.align = "center";
		velocidad.anchor.setTo(0,0.5);
		//tiempo.anchor.setTo(1,0);

	},
	faster:function() {
		if(speed < 30){
			speed = speed + 1;
		}
	}

}