let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","blue"];
let high=0;

let started=false;
let level=0;
let head=document.querySelector("h3");

document.addEventListener("keypress",()=>{
    if(started==false){
        started=true;
        console.log("game started");
        levelUp();
    }
});

function btnFlash(btn){
    setTimeout(()=>{btn.classList.add("flash");},100);
    setTimeout(()=>{btn.classList.remove("flash");},300);
}

function levelUp(){
    userSeq=[];
    level++;
    head.innerText=`Level ${level}`;
    let clr=Math.floor(Math.random()*3);
    let btn=document.querySelector(`.${btns[clr]}`);
    gameSeq.push(btns[clr]);
    btnFlash(btn);
}

function btnPress(){
    btnFlash(this);
    userSeq.push(this.getAttribute("id"));
    checkSeq(userSeq.length-1);
}

function checkSeq(ind){
    if(userSeq[ind]==gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            
            setTimeout(levelUp,300);
        }
    }
    else{
        head.innerHTML=`Game Over,Your score was <b>${level}<b>.<br>Press any key to try again`;
        if(level>high){
            high=level;
        }
        document.querySelector("h2").innerHTML=`Your High Score: ${high}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{document.querySelector("body").style.backgroundColor="white"},120);
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

let allBtns=document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener('click',btnPress);
}