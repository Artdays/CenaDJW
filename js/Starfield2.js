class Starfield2{
	
	fps ;
    canvas ;
    width ;
	height ;
    minVelocity ;
    maxVelocity ;
    qtdestars ;
	stars;
    intervalId ;
	ctx;
	star;
  
constructor(ctx) {
	this.fps = 20;
	this.width = 6;
	this.height = 10;
	this.minVelocity = 250;
	this.maxVelocity = 500;
	this.qtdestars = 5000;
	this.intervalId = 0;
    this.ctx = ctx;
	this.width = window.innerWidth;
	console.table(window.innerWidth);
	this.height = window.innerHeight;
	console.table(window.innerHeight);
	this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;  
  }
	
	
}
