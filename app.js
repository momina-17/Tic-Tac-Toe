let boxes = document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let msg=document.querySelector("#msg");
let newGame=document.querySelector("#newGame");
let winner=document.querySelector(".winner");
let arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count =0;
const enablebox = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame = () => {
     turnO=true;
     enablebox();
    winner.classList.add("hide");
    count=0;
};
const disableBtn = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const  showWinner = (value) => {
    msg.innerText=`Congratulations player ${value} Wins`;
    winner.classList.remove("hide");
    disableBtn();
};
const checkWin = () => {
    for(let pos of arr){
    let val1=boxes[pos[0]].innerText; 
    let val2=boxes[pos[1]].innerText; 
    let val3=boxes[pos[2]].innerText;
        
    if(val1!="" && val2!="" && val3 !=""){
        if(val1==val2 && val2==val3){

          showWinner(val1);
        }

    if(count === 9){
    msg.innerText=`Game Draws`;
    winner.classList.remove("hide");
    disableBtn();
    }
    }
   
}
};
let turnO=true;
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       if(turnO){
        box.innerText ="O";
        turnO=false;
       }
       else{
        box.innerText ="X";
        turnO=true;
       }
       box.disabled =true;
       count++;
       checkWin();
    })
});
reset.addEventListener("click",resetGame );
newGame.addEventListener("click",resetGame );
