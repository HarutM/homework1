const canvas = document.getElementById("gamee");
  const context = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 600;

  const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
 const backImage = new Image();
 backImage.src = 'https://i.imgur.com/iNdI7jL.png'

const badGuyImg = new Image();
badGuyImg.src = 'https://japanimetalks.files.wordpress.com/2015/02/orochimaru.png';

const goodGuyImg = new Image();
goodGuyImg.src = 'https://vignette.wikia.nocookie.net/five-world-war/images/2/29/Sasuke_Uchiha_Shippuden.png/revision/latest?cb=20161101144148'
const hero = {
		x: 0,
		y: 0,
		xDelta: 0,
		yDelta: 0,
		width: 60,
		height: 140,
		image: goodGuyImg,
		draw: function(){
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function() {
    
              if(this.x < 0 || this.x > canvas.width - this.width+5){
              	this.xDelta = this.xDelta * -1}
		      if(this.y < 0 || this.y > canvas.height - this.height+5){
		      	this.yDelta = this.yDelta * -1}
          
           this.x = this.x + this.xDelta;
           this.y = this.y + this.yDelta;  
      }, 
	}
  
     

     const orochimaru = function(count, canvasWidth, canvasHeight) {
      const array = [];
    for(let i = 0; i < count; i++){
    
          array[array.length] = {

            x: rand(canvasHeight-50),
            y: rand(canvasWidth-40),
            width: 50,
            height: 70,
            xDelta: 2, 
            yDelta: 2, 
            draw: function() {
              context.drawImage(badGuyImg, this.x, this.y, this.width, this.height)
              
            },
            update: function() { 
                            if(this.x < 0 || this.x > canvasWidth - this.width){
                            	this.xDelta *= -1}
		                    if(this.y < 0 || this.y > canvasHeight - this.height){
		                    	this.yDelta *= -1}
            
                             this.x += this.xDelta;
                             this.y += this.yDelta;
            
                            if (this.x < hero.x + hero.width && this.x + this.width > hero.x && this.y < hero.y + hero.height && 
       	                         this.height + this.y > hero.y){

      				                                            alert("Game Over!!!!!");}
    		}
        };  
     }  
     return array;
};

	
  
  const boxes = orochimaru(rand(8),canvas.width,canvas.height);
  
  const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === rightKey){
        		hero.xDelta = 5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === leftKey){
        		hero.xDelta = -5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === downKey){
        		hero.yDelta = 5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === upKey){
        		hero.yDelta = -5;
        	}
        	if(hero.x + hero.width === canvas.width){
        		hero.xDelta = 0;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);

    const drawAll = function(array){  

 for(let i = 0; i < array.length; i = i+1){     
          orochimaru(array[i].draw())       
            
        }         
  }; 

   const updateAll =function(array1){
        for(let i = 0; i < array1.length; i++){
          orochimaru(array1[i].update());
          
            
        }          
      };

  
  const loop = function() { 
  	context.drawImage(backImage, 0, 0, canvas.width, canvas.height)    
    drawAll(boxes);  
    updateAll(boxes);
    hero.draw();
    hero.update();                            
    requestAnimationFrame(loop);       
  }         
          
  loop();   