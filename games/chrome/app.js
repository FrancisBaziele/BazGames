//=========setup=========\\
console.log(Math.floor(Math.random() * 20))
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var player = document.querySelector("#player");
var enemy = document.querySelector("#enemy");


var score =0;
var wh = window.innerHeight;
var ww = window.innerWidth;
   canvas.height = wh;
  canvas.width = ww;


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

function endGame(point) {
  dialogText.textContent = "Game Over"
  btn.textContent = "Reload"
  p.innerHTML = `Score ${point}.<br> Reload to play again`
  dialog.style = "display: block;"
  enemy.style.animation= "none";
}


function init() {
//======= function
enemy.style.animation= "run 1.5s infinite linear";
player.style.display = "block"
window.addEventListener("click", jump)

function jump() {
    player.classList.add("jumpanima");
score+=10;

    setTimeout(function() {
 player.classList.remove("jumpanima");
    }, 500);
}

    let enemyleft;
  let playertop;

/*var checkDead = setInterval(function() {
    

}, 5);
*/
//==============objects===========\\


var cloud = [
   {"x":200,"y":300,"w":20,"h":30},
    {"x":250,"y":20,"w":30,"h":40},
    {"x":220,"y":600,"w":15,"h":20},
    {"x":300,"y": 700,"w":20,"h":40},
    {"x":230,"y":400,"w":10,"h":20},
     {"x":180,"y":800,"w":20,"h":30},
    {"x":300,"y": 650,"w":40,"h":20},
    {"x":230,"y":100,"w":10,"h":30}

];

//============animation =======\\
function animate() {
  //ctx.save();
  ctx.clearRect(0, 0, ww, wh);
//ctx.fillRect(0, 0, 500, 700)
  
 // draw here..

ctx.fillStyle="#593810";
ctx.fillRect(0, 0, 50, wh);
ctx.fillStyle="#3AB512";
ctx.fillRect(50, 0, 20, wh);

//cloud
for (var i = 0; i < cloud.length; i++) {
var c = cloud[i]
    ctx.fillStyle = "rgba(255,255,255,0.6)";
if (c.y + c.h == -10) {
    c.y = wh
}
ctx.fillRect(c.x, c.y-= 0.5, c.w, c.h)
}



if (score > 200) {
  canvas.style.background="#403F46"
}



playertop = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    enemyleft = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
  if(enemyleft<100 && enemyleft>50 && playertop<=130){
  endGame(score)
}

//ctx.restore()
};

window.setInterval(animate, 30)
}