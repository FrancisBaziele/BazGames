const spots = {
  a1: {x: false, o: false, taken: false},
  a2: {x: false, o: false, taken: false},
  a3: {x: false, o: false, taken: false},
  b1: {x: false, o: false, taken: false},
  b2: {x: false, o: false, taken: false},
  b3: {x: false, o: false, taken: false},
  c1: {x: false, o: false, taken: false},
  c2: {x: false, o: false, taken: false},
  c3: {x: false, o: false, taken: false}
};

const x = document.querySelector(".x")
const o = document.querySelector(".o")
const cells = document.querySelectorAll(".container .cell");
let current_player = "O";
let winState = false;

cells.forEach( cell => {
  
  cell.addEventListener("click", (e)=>{
  const key = cell.className.split(' ')[0];
  if (spots[key].taken === true || winState !== false) {
    
  }else {
    if (current_player === "X") {
      spots[key].x = true;
      spots[key].taken = true;
      
    } else if( current_player === "O") {
      spots[key].o = true;
      spots[key].taken = true;
    }
    cell.innerHTML = `<p>${current_player}</p>`;
    changePlayer();
    winState = checkWin2();
    endGame();
    console.log(winState);
  }
  });
});

