let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ww = window.innerWidth;
const wh = window.innerHeight;
canvas.height = wh;
canvas.width = ww;

 











      




function gameloop() {

if (world.player.jumping === false ) {
    this.animaList =[1]
}


if (controller.buttons[0].active && world.player.jumping == false) {

     world.player.jump()

      }

      if (controller.buttons[1].active) {

        world.player.moveLeft()

      }

      if (controller.buttons[2].active) {

        world.player.moveRight()

      }
      
      if (controller.buttons[2].active === false && controller.buttons[1].active === false &&controller.buttons[0].active === false) {
  world.player.animaList =[0]
      }





      // simulate gravity:
world.player.velocity_y += 1;

      // simulate friction:
      world.player.velocity_x *= 0.8;
      world.player.velocity_y *= 0.9;

      // move the world.player:
      world.player.update();
      // collision detection for the world.player and the boundaries of the graphics buffer:
      if (world.player.x + world.player.width < 0) {

        world.player.x = canvas.width;

      } else if (world.player.x > canvas.width) {

       world.player.x = 0;

      }

      /*if (world.player.y + world.player.height > 430) {

        world.player.y = 430 - world.player.height;
       world.player.jumping = false;

      }
*/
      
      
      ctx.clearRect(0,0, ww,wh)
      
      
 

display.drawMap()
world.player.tile_x = Math.floor(world.player.x / display.tileSize);
world.player.tile_y = Math.floor(world.player.y / display.tileSize);

/*
display.map[world.player.tile_y * 16 + world.player.tile_x] = 0;
*/

world.collider.collideObject(world.player)


ctx.fillStyle= "#06111E";
ctx.fillRect(0, window.innerWidth / 16 * 22, ww, wh / 5)


controller.buttons.forEach((button)=>{
    button.draw()
})


/*
ctx.fillStyle="red"
 ctx.fillRect(world.player.x, world.player.y, world.player.width, world.player.height);
 */

world.player.animation.drawSprite(
   world.player.x-0.5, world.player.y-0.5, world.player.width, world.player.height, world.player.animaList)

window.requestAnimationFrame(gameloop)
}


gameloop()







window.addEventListener("touchstart", (event)=>{
    
 event.preventDefault();
   controller.testButtons(event.targetTouches);

    
})

window.addEventListener("touchmove", (event)=>{
    
   event.preventDefault();
   controller.testButtons(event.targetTouches);

    
})
window.addEventListener("touchend", (event)=>{
  
    console.log(world.player.tile_x + " is the tile_x      ||    tile_y = " +world.player.tile_y + display.tileSize);
    event.preventDefault();
  controller.testButtons(event.targetTouches);

    
})