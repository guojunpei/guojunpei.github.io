//import "./tic-tac-toe-game.css";

let app=document.getElementById("app-tic-tac-toe-game");
app.style.display="block";
app.style.justifyContent="center";
app.style.alignItems="center";
app.style.height="100%";
app.style.width="100%";
app.style.padding="0";
app.style.margin="0";
app.style.backgroundColor="black";

let rowSize=3;
let columnSize=3;
let btnWidth=3;
let btnHeight=3;

let gameContainer=document.createElement("div");
let gs=gameContainer.style;
gs.backgroundColor="black";
gs.width=`${columnSize*btnWidth}rem`;
gs.height=`${rowSize*btnHeight}rem`;
gs.padding="1rem";
gs.border="1rem solid purple";

for(let i=0;i<rowSize;i++){
    let row=document.createElement("div");
    row.style.padding="0";
    row.style.margin="0";
    for(let j=0;j<columnSize;j++){
        let btn=document.createElement("button");
        btn.innerText=i*columnSize+j+1;
        let bs=btn.style;
        bs.width=`${btnWidth}rem`;
        bs.height=`${btnHeight}rem`;
        bs.padding="0";
        bs.margin="0";
        bs.color="white";
        bs.backgroundColor="blue";
        bs.borderWidth="0.1rem";
        bs.borderColor="gray";
        row.appendChild(btn);
        bs.borderStyle="solid";
    }
    gameContainer.appendChild(row);
}

app.appendChild(gameContainer);
