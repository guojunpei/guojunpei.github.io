//import "./tic-tac-toe-game.css";

let app=document.getElementById("app-tic-tac-toe-game");
app.style.display="flex";
app.style.justifyContent="center";
app.style.alignItems="center";
app.style.height="100%";
app.style.width="100%";
app.style.padding="0";
app.style.margin="0";
app.style.backgroundColor="black";

let gameContainer=document.createElement("div");
gameContainer.style.backgroundColor="black";

let row=document.createElement("div");

let btn=document.createElement("button");

let rowSize=3;
let columnSize=3;

for(let i=0;i<rowSize;i++){
    for(let j=0;j<columnSize;j++){
        btn;
        btn.innerText=i*columnSize+j+1;
    }
}


