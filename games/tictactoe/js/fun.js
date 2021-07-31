function changePlayer() {
  if (current_player === "X") {
    current_player = "O";
   x.classList.remove("active");
   o.classList.add("active");
  }else if (current_player === "O"){
    current_player = "X";
   o.classList.remove("active");
   x.classList.add("active");
  }
}

function endGame() {
  if (winState !== false) {
    const winCells = winState[1].split(" ");
    console.log(winCells);
    winCells.forEach(cell=>{
      console.log(cell);
      document.querySelector(`.${cell}`).classList.add("active")
      document.querySelector('.winner').textContent = `${winState[0]} Wins!!!`;
      document.querySelector('.winner').classList.add("animate_in")
  })
  }
}


function checkWin() {
  if (spots.a1.taken === true && spots.a2.taken === true && spots.a3.taken === true) {
    if (spots.a1.x === true && spots.a2.x === true && spots.a3.x === true) {
      return "x"
    }else if(spots.a1.o === true && spots.a2.o === true && spots.a3.o === true){
      return "o"
    }else {
      return false
    }
    
  }else if(spots.b1.taken === true && spots.b2.taken === true && spots.b3.taken === true) {
    if (spots.b1.x === true && spots.b2.x === true && spots.b3.x === true) {
      return "x"
    }else if (spots.b1.o === true && spots.b2.o === true && spots.b3.o === true){
      return "o"
    }else {
      return false
    }
    
  }else if(spots.c1.taken === true && spots.c2.taken === true && spots.c3.taken === true) {
    if (spots.c1.x === true && spots.c2.x === true && spots.c3.x === true) {
      return "x"
    }else if(spots.c1.o === true && spots.c2.o === true && spots.c3.o === true){
      return "o"
    }else {
      return false
    }
  
  }else if(spots.a1.taken === true && spots.b1.taken === true && spots.c1.taken === true) {
    if (spots.a1.x === true && spots.b1.x === true && spots.c1.x === true) {
      return "x"
    }else if(spots.a1.o === true && spots.b1.o === true && spots.c1.o === true){
      return "o"
    }else {
      return false
    }
    
  }else if(spots.a2.taken === true && spots.b2.taken === true && spots.c2.taken === true) {
    if (spots.a2.x === true && spots.b2.x === true && spots.c2.x === true) {
      return "x"
    }else if (spots.a2.o === true && spots.b2.o === true && spots.c2.o === true){
      return "o"
    }else {
      return false
    }
    
  }else if(spots.a3.taken === true && spots.b3.taken === true && spots.c3.taken === true) {
    if (spots.a3.x === true && spots.b3.x === true && spots.c3.x === true) {
      return "x"
    }else if(spots.a3.o === true && spots.b3.o === true && spots.c3.o === true){
      return "o"
    }else {
      return false
    }
    
  }else if(spots.a1.taken === true && spots.b2.taken === true && spots.c3.taken === true) {
    if (spots.a1.x === true && spots.b2.x === true && spots.c3.x === true) {
      return "x"
    }else if (spots.a1.o === true && spots.b2.o === true && spots.c3.o === true){
      return "o"
    }else {
      return false
    }
    
  }else if(spots.a3.taken === true && spots.b2.taken === true && spots.c1.taken === true) {
    if (spots.a3.x === true && spots.b2.x === true && spots.c1.x === true) {
      return "x"
    }else if(spots.a3.o === true && spots.b2.o === true && spots.c1.o === true){
      return "o"
    }else {
      return false
    }
  }else {
    return false
  }
}



function checkWin2() {
    if (spots.a1.x === true && spots.a2.x === true && spots.a3.x === true) {
      return ["x", "a1 a2 a3"]
    }else if(spots.a1.o === true && spots.a2.o === true && spots.a3.o === true){
      return ["o", "a1 a2 a3"]
    }else if (spots.b1.x === true && spots.b2.x === true && spots.b3.x === true) {
      return ["x", "b1 b2 b3"]
    }else if (spots.b1.o === true && spots.b2.o === true && spots.b3.o === true) {
      return ["o", "b1 b2 b3"]
    }else if (spots.c1.x === true && spots.c2.x === true && spots.c3.x === true) {
      return ["x", "b1 b2 b3"]
    }else if (spots.c1.o === true && spots.c2.o === true && spots.c3.o === true){
      return ["o", "c1 c2 c3"]
    }else if (spots.a1.x === true && spots.b1.x === true && spots.c1.x === true) {
      return ["x", "a1 b1 c1"]
    }else if (spots.a1.o === true && spots.b1.o === true && spots.c1.o === true){
      return ["o", "a1 b1 c1"]
    }else if (spots.a2.x === true && spots.b2.x === true && spots.c2.x === true) {
      return ["x", "a2 b2 c2"]
    }else if (spots.a2.o === true && spots.b2.o === true && spots.c2.o === true){
      return ["o", "a2 b2 c2"]
    }else if (spots.a3.x === true && spots.b3.x === true && spots.c3.x === true) {
      return ["x", "a3 b3 c3"]
    }else if (spots.a3.o === true && spots.b3.o === true && spots.c3.o === true){
      return ["o", "a3 b3 c3"]
    }else if (spots.a1.x === true && spots.b2.x === true && spots.c3.x === true) {
      return ["x", "a1 b2 c3"]
    }else if (spots.a1.o === true && spots.b2.o === true && spots.c3.o === true){
      return ["o", "a1 b2 c3"]
    }else if (spots.a3.x === true && spots.b2.x === true && spots.c1.x === true) {
      return ["x", "a3 b2 c1"]
    }else if (spots.a3.o === true && spots.b2.o === true && spots.c1.o === true){
      return ["o", "a3 b2 c1"]
    }else {
      return false
    }
}