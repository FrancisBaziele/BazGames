
class Button{
    
constructor(x, y, width, height, color) {

    this.active = false;
    this.color = color;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

  } 
        
       istouched(x, y){
if (x < this.x || x > this.x + this.width || y < this.y || y > this.y + this.height) {

        return false;

      }

      return true;

          
       }
       
       draw(){
           ctx.fillStyle= this.color;
           ctx.fillRect(this.x, this.y, this.width, this.height)
       }
   
};


let controller = {
    
    
   buttons : [
      new Button(5, window.innerWidth / 16 * 22 +10, 60, 60, "#f09000"),
      new Button(window.innerWidth / 1.8, window.innerWidth / 16*22+10, 60, 60, "#0090f0"),
      new Button(window.innerWidth - 70, window.innerWidth / 16*22+10, 60, 60, "#0090f0")
    ],
    
    testButtons : function(target_touches){ 

  let button, index1, touch;


      // loop through all buttons:
      for (let i = 0; i < this.buttons.length; i++) {

        let button = this.buttons[i];
        button.active = false;
        

        // loop through all touch objects:
 for (index1 = target_touches.length - 1; index1 > -1; -- index1) {

     touch = target_touches[index1];

  // make sure the touch coordinates are adjusted for both the canvas offset and the scale ratio of the buffer and output canvases:
  
  
 if (button.istouched(touch.clientX ,touch.clientY)) {

   button.active = true;
   break;
   // once the button is active, there's no need to check if any other points are inside, so continue
          }
        }
}
  
  
}

};