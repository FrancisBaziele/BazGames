var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");


var score =0;
var wh = window.innerHeight;
var ww = window.innerWidth;
canvas.height = wh;
canvas.width = ww;

var right = document.getElementById("right")
var left = document.getElementById("left")



const btn = document.getElementById("btn")
const dialog = document.getElementById("dialog")
const dialogText = document.getElementById("dialog_title")
const p = document.getElementById("p")

btn.addEventListener("click", (e)=>{
  if (btn.textContent === "Play") {
  dialog.style= "display: none";
  init()
  }else if(btn.textContent === "Reload"){
    window.location.reload()
  }
})

function endGame(intervalId, point) {
  dialogText.textContent = "Game Over"
  btn.textContent = "Reload"
  p.innerHTML = `Score ${point}.<br> Reload to play again`
  dialog.style = "display: block;"
  clearInterval(intervalId)
}

function init() {

//=========Objects===========\\
var plat = {
    x: 90,
    y: 480,
    w: 100,
    h: 20

};

var plain = new Image;
plain.src="paper_panel_1307_x_181.png";

var ball = {
    x: Math.floor(Math.random() * 280)+ 20,
    y: 40,
    
    r: 20,
    speed: 10

};

var vx = -ball.speed;
var vy = ball.speed;
var onponp;
//var score = 0;






//=============Animations====\\

function animate() {
  ctx.save();
ctx.clearRect(0, 0, ww, wh);



/*
ctx.fillStyle= "#001F6F"
ctx.fillRect(0, 0, ww, wh)
ctx.fillStyle="rbga(255,255,255,0.3) "


ctx.fillRect(0, 0, ww, wh)
*/

onplat = ball.y + ball.r >= plat.y && ball.y + ball.r< plat.y+ plat.h && ball.x >= plat.x && ball.x <= plat.x + plat.w ;
 // draw here..
if( onplat || ball.y - ball.r <= 0){
    vy = -vy;
    ball.speed++;
    score+=5;
   // console.log(vy + "     ||     " + -vy)
};



if( ball.x + ball.r >= ww|| ball.x - ball.r <= 0){
    vx = -vx
};


if (ball.y - ball.r > canvas.height) {
    endGame(animainter, score)
}

ctx.fillStyle="#FFF2D7"


ctx.beginPath();
ctx.arc(ball.x+= vx, ball.y += vy, ball.r, Math.PI * 2, 0, 0, false)
ctx.fill()




ctx.fillStyle="#51DE92"
ctx.drawImage(plain, plat.x, plat.y, plat.w, plat.h)

ctx.restore()
};

var animainter = window.setInterval(animate, 30)


//==========EventListeners========\\
var mright;
var mleft;
right.ontouchstart = function(){
 
  mright = setInterval(function(){
   plat.x+= 6; 
}, 30);
 
};


right.ontouchend = function(){
 console.log(mright)

 clearInterval(mright);
 

};




left.ontouchstart = function(){
  mleft = setInterval(function(){
   plat.x-=6; 
}, 30);
 
};


left.ontouchend = function(){
    clearInterval(mleft);
};

window.addEventListener("click", function(event){
    console.log(event)
})
}