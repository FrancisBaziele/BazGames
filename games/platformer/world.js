




class Animation {
     
        constructor(image, mapwidth, mapheight,indexWidth, indexHeight) {
        
    this.anima_delay = 0;
    this.anima_icount = 0;
    this.anima_cframe = 0;
    this.mapheight = mapheight;
    this.mapwidth = mapwidth;
    this.image = image;
    this.indexWidth = indexWidth;
    this.indexHeight = indexHeight;
        }
        
        
        
        i2xy(index, mapwidth){
    var x = index % mapwidth;
    var y = Math.floor(index / mapwidth);
   // console.log(x + "     " + y)
    return [x,y]
}

        
   drawSprite( x, y, width, height , spritsheetindex) {
    
    if (this.anima_delay++ >= 3) {
        this.anima_delay = 0;
        this.anima_icount++;
        
        
   
  if (this.anima_icount >= spritsheetindex.length) {
            this.anima_icount=0;
           
        }
    this.anima_cframe = spritsheetindex[this.anima_icount];
        
    }
   
   let res = this.i2xy(this.anima_cframe, this.mapwidth);
    
    ctx.drawImage(this.image, res[0]*this.indexWidth, res[1]*this.indexHeight, this.indexWidth, this.indexHeight, x, y, width, height);

}
}




class Player {
       
constructor(x, y, width, height, animation){
    this.animaList = [2]
           this.x = x,
        this.y = y,
        this.width = width,
        this.height= height,
        this.velocity_x =0,
      this.velocity_y = 0,
      this.tile_x  = 0,
      this.tile_y = 0,
        this.jumping = true,
       this.animation =  animation
       }
       jump() {
           
      this.jumping     = true;
      this.velocity_y -= 20;
      this.animaList =[1]
       }
   moveLeft()  {
       this.velocity_x -= 0.6; 
       this.animaList =[9,10]
   }
  moveRight()  { 
      this.velocity_x += 0.6; 
      this.animaList =[9,10]
  }
  update() {

    this.x_old = this.x;
    this.y_old = this.y;
    this.x    += this.velocity_x;
    this.y    += this.velocity_y;

  }

       
       getBottom()  { 
    return this.y     + this.height; 
       }

  getLeft()  { 
    return this.x;                   }

  getRight() {
      return this.x     + this.width;  }
  getTop() {
      return this.y;                   }
  getOldBottom(){
    return this.y_old + this.height; }
  getOldLeft()  {
      return this.x_old;               }
  getOldRight()  { 
      return this.x_old + this.width;  }
  getOldTop()  {
      return this.y_old                }
  setBottom(y) { 
   this.y     = y    - this.height; }
  setLeft(x) {
      this.x     = x;                  }
  setRight(x) { 
      this.x     = x    - this.width;  }
  setTop(y) { 
      this.y     = y;                  }
  setOldBottom(y) {
      this.y_old = y    - this.height; }
  setOldLeft(x) {
      this.x_old = x;                  }
  setOldRight(x) { 
      this.x_old = x    - this.width;  }
  setOldTop(y) {
      this.y_old = y;                  }


};




let playerSprite = new Image;
playerSprite.src = "player_tilesheet.png";
     








let world = {   
    
    
    
   player: new Player(100,100,window.innerWidth / 16,27, new Animation(playerSprite, 9, 3, 80, 110)),
     
     
     
  /*player : {

      color:"#ff0000",
      height:22,
      jumping:true,
      velocity_x:0,
      velocity_y:0,
      tile_x :0,
      tile_y: 0,
      width:22,
      x:0,
      y:0,

}
    */
    
  collider : {

     
       /* This will resolve a collision (if any) between an object and the y location of
  some tile's bottom. All of these functions are pretty much the same, just adjusted
  for different sides of a tile and different trajectories of the object. */
  collidePlatformBottom: function(object, tile_bottom) {

    /* If the top of the object is above the bottom of the tile and on the previous
    frame the top of the object was below the bottom of the tile, we have entered into
    this tile. Pretty simple stuff. */
    if (object.getTop() < tile_bottom && object.getOldTop() >= tile_bottom) {

      object.setTop(tile_bottom);// Move the top of the object to the bottom of the tile.
      object.velocity_y = 0;     // Stop moving in that direction.
      return true;               // Return true because there was a collision.

    } return false;              // Return false if there was no collision.

  },

  collidePlatformLeft: function(object, tile_left) {

    if (object.getRight() > tile_left && object.getOldRight() <= tile_left) {

      object.setRight(tile_left - 0.01);// -0.01 is to fix a small problem with rounding
      object.velocity_x = 0;
      return true;

    } return false;

  },

  collidePlatformRight: function(object, tile_right) {

    if (object.getLeft() < tile_right && object.getOldLeft() >= tile_right) {

      object.setLeft(tile_right);
      object.velocity_x = 0;
      return true;

    } return false;

  },

  collidePlatformTop: function(object, tile_top) {

    if (object.getBottom() > tile_top && object.getOldBottom() <= tile_top) {

      object.setBottom(tile_top - 0.01);
      object.velocity_y = 0;
      object.jumping    = false;
      return true;

    } return false;

  },  
       
       
   

      
   collide: function(value, object, tile_x, tile_y, tile_size) {



    switch(value) { // which value does our tile have?

      /* All 15 tile types can be described with only 4 collision methods. These
      methods are mixed and matched for each unique tile. */

  case  1: this.collidePlatformTop  (object, tile_y  ); break;


   case  2:
 this.collidePlatformRight    (object, tile_x + tile_size); break;


      case  3: 
  if (this.collidePlatformTop  (object, tile_y            )) return;// If there's a collision, we don't need to check for anything else.
 this.collidePlatformRight    (object, tile_x + tile_size); break;


      case  4:
 this.collidePlatformBottom   (object, tile_y + tile_size); break;


      case  5: 
  if (this.collidePlatformTop  (object, tile_y            )) return;
 this.collidePlatformBottom   (object, tile_y + tile_size); break;


      case  6: 
if (this.collidePlatformRight(object, tile_x + tile_size)) return;
    this.collidePlatformBottom   (object, tile_y + tile_size); break;


      case  7: 
if (this.collidePlatformTop  (object, tile_y            )) return;
if (this.collidePlatformRight(object, tile_x + tile_size)) return;
this.collidePlatformBottom   (object, tile_y + tile_size); break;



      case  8: 
this.collidePlatformLeft     (object, tile_x            ); break

;
      case  9: 
if (this.collidePlatformTop  (object, tile_y            )) return;
   this.collidePlatformLeft     (object, tile_x            ); break;


      case 10:
if (this.collidePlatformLeft (object, tile_x            )) return;
this.collidePlatformRight    (object, tile_x + tile_size); break;


      case 11: 
if (this.collidePlatformTop  (object, tile_y            )) return;
 if (this.collidePlatformLeft (object, tile_x            )) return;
this.collidePlatformRight    (object, tile_x + tile_size); break;


      case 12: 
if (this.collidePlatformLeft (object, tile_x            )) return;
    this.collidePlatformBottom   (object, tile_y + tile_size); break;


      case 13: 
if (this.collidePlatformTop  (object, tile_y            )) return;
  if (this.collidePlatformLeft (object, tile_x            )) return;
  this.collidePlatformBottom   (object, tile_y + tile_size); break;


      case 14: 
if (this.collidePlatformLeft (object, tile_x            )) return;
 if (this.collidePlatformRight(object, tile_x            )) return;
 this.collidePlatformBottom   (object, tile_y + tile_size); break;



      case 15: 
if (this.collidePlatformTop  (object, tile_y            )) return;
if (this.collidePlatformLeft (object, tile_x            )) return;
if (this.collidePlatformRight(object, tile_x + tile_size)) return;
this.collidePlatformBottom   (object, tile_y + tile_size); break;

    }



  },


collision_map :
[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,12,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,1,1,1,1,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,11,0,0,0,0,0,8,
2,0,0,1,1,0,0,0,0,12,5,5,5,5,5,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,8,
2,5,5,5,7,0,0,0,0,0,0,0,15,0,0,8,
2,0,0,0,14,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,15,0,0,0,0,0,8,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,
2,3,0,0,0,0,0,0,0,0,0,0,0,0,9,1,
2,2,0,0,0,0,0,11,0,0,0,0,0,9,1,1,
2,2,0,0,0,0,0,10,0,0,0,9,9,0,0,1,
2,2,0,0,0,0,0,10,0,0,0,8,0,0,0,1,
2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   
rows: 22,

collideObject:function(object) {




    var bottom, left, right, top, value;


    top    = Math.floor(object.getTop()    / display.tileSize);
    left   = Math.floor(object.getLeft()   / display.tileSize);
    value  = this.collision_map[top * 16 + left];
    this.collide(value, object, left * display.tileSize, top * display.tileSize, display.tileSize);


    top    = Math.floor(object.getTop()    / display.tileSize);
    right  = Math.floor(object.getRight()  / display.tileSize);
    value  = this.collision_map[top * 16 + right];
    this.collide(value, object, right * display.tileSize, top * display.tileSize, display.tileSize);

    bottom = Math.floor(object.getBottom() / display.tileSize);
    left   = Math.floor(object.getLeft()   / display.tileSize);
    value  = this.collision_map[bottom * 16 + left];
    this.collide(value, object, left * display.tileSize, bottom * display.tileSize, display.tileSize);


    bottom = Math.floor(object.getBottom() / display.tileSize);
    right  = Math.floor(object.getRight()  / display.tileSize);
    value  = this.collision_map[bottom * 16 + right];
    this.collide(value, object, right * display.tileSize, bottom * display.tileSize, display.tileSize);

  }


      
      
      
  }
  
    
    
}