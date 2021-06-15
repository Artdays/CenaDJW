class Starfield
{
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
  
 
inicializa()
{
	
	var self = this;
	 
addEventListener('resize', function resize(event){
    
	self.width = window.innerWidth;
    self.height = window.innerHeight;
	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	console.table(self.ctx.width);
	console.table(self.ctx.height);
    self.desenha() 
	
	
}); 

}
start()
{
	
	this.stars = [];
	for(var i=0; i<this.qtdestars; i++) {
			var x = Math.random()*this.width;
			var y =  Math.random()*this.height;
			var size =  Math.random()*50+20;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			this.star = new Star(x,y, size,vel );
		this.stars[i] = this.star;
	}
	
	var timeUpdate = 1000 / this.fps;
	var self = this;
	this.intervalId = setInterval(function() {
        self.update();
        self.desenha();	
    }, timeUpdate);
	
	
}



	desenha()
	{
		this.ctx.fillStyle = '#29381F';
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.fillStyle = '#597543';
		
		for(var i=0; i<this.stars.length;i++) {
			this.star = this.stars[i];
			this.ctx.fillRect(this.star.x, this.star.y, this.star.size, this.star.size);
		}
	}


  update(){
	var dt = 1 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;
		if(star.y > this.height) {
			var x = Math.random()*this.width;
			var size =  Math.random()*50+20;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Star(x, 0,size, vel);		
		 	this.stars[i] = s;
		}
		
	}
}

stop()
{
	clearInterval(this.intervalId);
}
	
}