const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const colorArray = ["#A52A2A", "#DC143C", "#ff5c33", "#E9967A", "#B22222", "#CD5C5C", "#F08080", "red", "#b30000"]
 
  const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
  
     

     const createBoxes = function(count, canvasWidth, canvasHeight) {
      const array = [];
    for (let i = 0; i < count; i=i+1){
    
          array[i] = {

            x: rand(canvasHeight),
            y: rand(canvasWidth),
            width: 30,
            height: 30,
            xDelta: 1, 
            yDelta: 1, 
            color: colorArray[rand(colorArray.length)-1],
            draw: function() {
              context.fillStyle = this.color;
                context.fillRect(this.x, this.y, this.width, this.height);
            },
            update: function() {
              
               this.x = this.x + this.xDelta * 4;
               this.y = this.y + this.yDelta * 4;
    
                if(this.x >= canvas.width-this.height)
                    this.xDelta = -1;
                if(this.x <= 0) 
                    this.xDelta = 1;
              
              if(this.y >= canvas.width-this.height)
                    this.yDelta = -1;
               if(this.y <= 0) 
                    this.yDelta = 1;
                     },
      };
}  

     return array;
};
  
  const boxes = createBoxes(rand(20),500,500);
  
  
  
   const updateData =function(){
        for(let i = 0; i < boxes.length; i = i+1){
          boxes[i].update();
          
            
        }          
      } 

  
  const draw = function(){  
    
    context.clearRect(0, 0, canvas.width, canvas.height);  
  
 for(let i = 0; i < boxes.length; i = i+1){     
          boxes[i].draw();
                          
            
        }         
  }; 
  
  const loop = function() {     
    draw();  
    updateData();                            
    requestAnimationFrame(loop);       
  }     
          
  loop(); 