window.onload = function(){
	var game = new Phaser.Game(1920,1080,Phaser.AUTO);
	game.state.add('Preload',Preload);
	game.state.add('Menu',Menu);
	game.state.add('Game',Game);
	game.state.add('GameOver',GameOver);
	game.state.start('Preload');
}