let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let startGameBtn = document.querySelector("#new-btn");

let turno =true;
let count= 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5],
];
const resetGame = () =>{
    turno = true;
    count=0;
    enableBoxes ();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    if(turno) {
        box.innerText ="o";
        turno =false;
    }
    else{
        box.innerText ="x";
        turno=true;
    }
      box.disabled =true;
      count++;


       let iswinner =checkWinner();
     if ( count === 9 && !iswinner){
        gameDraw();
    }
    });  
});

const gameDraw = () =>{
    msg.innerText = `game was a draw.`;
    msgContainer.classList.add("hide");
    disableBoxes();
};

const disableBoxes =() => {
    for(let box of boxes ) {
        box.disabled= true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled= false;
        box.innerText = "";
    }
};

const showWinner =(winner) => {
    msg.innerText =`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const  checkWinner = () => {
  for  (let pattern of winPatterns) {
        let pos1Val = boxes [pattern[0]].innerText;
         let pos2Val = boxes [pattern[1]].innerText;
         let pos3Val = boxes [pattern[2]].innerText;

      if (pos1Val !="" &&  pos2Val !="" && pos3Val !="" ) {
         if( pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner" ,pos1Val);
            showWinner(pos1Val);
            return true;
          }  
       }
   }
};


 startGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);
