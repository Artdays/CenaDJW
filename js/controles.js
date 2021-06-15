var desenhador = document.getElementById("hackspace").getContext("2d");
var player = new Image();
var x = 100;
var y = 100;

function criarPlayer(){
	player.src = "personagem.png";
	desenho();
	
}	

function desenho(){
	requestAnimationFrame(criarPlayer);
	desenhador.drawImage(player, x, y, 120, 115);
}
criarPlayer();


