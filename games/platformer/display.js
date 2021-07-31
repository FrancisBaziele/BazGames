

let spriteSheet = new Image;
spriteSheet.src = "sheet.png"





let display ={
    
    map :
[10,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,12,1,1,11,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,9,0,0,0,0,0,3,
2,0,0,5,6,0,0,0,0,10,1,1,1,1,1,10,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,7,0,0,0,0,0,0,3,
10,1,1,1,9,0,0,0,0,0,0,0,7,0,0,3,
2,0,0,0,14,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,7,0,0,0,0,0,3,
2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,
10,9,0,0,0,0,0,0,0,0,0,0,0,0,8,10,
10,2,0,0,0,0,0,7,0,0,0,0,0,8,10,10,
10,2,0,0,0,0,0,10,0,0,0,8,1,10,10,10,
10,2,0,0,0,0,0,10,0,0,0,3,10,10,10,10,
10,10,1,1,1,1,1,10,1,1,1,10,10,10,10,10],

  tileSize: window.innerWidth / 16,
  
  
   i2xy : function (index, mapwidth)
{
    var x = (index % mapwidth) * 70;
    var y = Math.floor(index / 6  ) * 70;
   // console.log(x + "     " + y)
    return [x,y]
},

  
  drawMap : function() {

    for (let index = 0; index < this.map.length; index ++) {

ctx.fillStyle = "#ffffff";
if (this.map[index] == 1) {
    
    let res = this.i2xy(22, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 2) {
    
    let res = this.i2xy(2, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 3) {
    
    let res = this.i2xy(8, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 4) {
    
    let res = this.i2xy(36, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 5) {
    
    let res = this.i2xy(21, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 6) {
    
    let res = this.i2xy(15, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 7) {
    
    let res = this.i2xy(10, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 8) {
    
    let res = this.i2xy(32, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 9) {
    
    let res = this.i2xy(26, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 10) {
    
    let res = this.i2xy(25, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 11) {
    
    let res = this.i2xy(16, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 12) {
    
    let res = this.i2xy(28, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 13) {
    
    let res = this.i2xy(34, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 14) {
    
    let res = this.i2xy(13, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 15) {
    
    let res = this.i2xy(19, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else if (this.map[index] == 16) {
    
    let res = this.i2xy(9, 6)
    //console.log(`  ${res[0]}  ${res[1]}`)
    ctx.drawImage(spriteSheet, res[0] , res[1] , 70, 70, (index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);

    
}else {

      
      ctx.fillRect((index % 16) * this.tileSize, Math.floor(index/16) * this.tileSize, this.tileSize, this.tileSize);
}
    }

    //context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, context.canvas.width, context.canvas.height);

  }

    
    
}