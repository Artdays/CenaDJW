var desenhador = document.getElementById("virus").getContext("2d");
var player = new Image();
var x = 0;
var y = 0;
var direcao = "nada";

function joguinho(){
    player.src = "personagem.png"
	window.addEventListener("keydown",mover);
    window.addEventListener("keyup", parar);
	movimentacao();
}

function movimentacao(){
	
	playerX = x;
	playerY = y;
	playerL = 500;
	playerA = 400;
	
	requestAnimationFrame(movimentacao);
	desenhador.drawImage(player, playerX, playerY, playerL, playerA);
	
	if(direcao=="direita"){
    x = x + 10;
    }
    if(direcao=="esquerda"){
    x = x - 10;
    }
	if(direcao=="cima"){
	y = y - 10;	
	}
	if(direcao=="baixo"){
	y = y + 10;	
	}
	
}

function mover(tecla){
                    if(tecla.keyCode==39){
                        direcao = "direita";
                    }
                    if(tecla.keyCode==37){
                        direcao = "esquerda";
                    }
                    if(tecla.keyCode==38){
                        direcao = "cima";
                    }
                    if(tecla.keyCode==40){
                        direcao = "baixo";
                    }
}

function parar(){
    direcao = "nada";
					
}



joguinho();
