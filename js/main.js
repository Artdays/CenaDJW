'use strict';
const KEY = {
	LEFT: 37,
	RIGHT: 39,
	UP: 38,
	DOWN: 40
}
document.addEventListener("keydown",(event)=>{
	if(event.keyCode == KEY.UP){
		y -= 20;
		console.table("a");
	}
	else if(event.keyCode == KEY.DOWN){
		y += 20;
		console.table("b");
	}
	else if(event.keyCode == KEY.LEFT){
		x -= 20;
		console.table("c");
	}
	else if(event.keyCode == KEY.RIGHT){
		x += 20;
		console.table("d");
	}
});
const canvas = document.getElementById('hackspace');
const ctx = canvas.getContext('2d');

let hack = new Starfield(ctx);
hack.inicializa();
hack.start();
