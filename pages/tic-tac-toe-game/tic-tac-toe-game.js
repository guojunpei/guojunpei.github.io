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
let btnHeight=2;

let gameContainer=document.createElement("div");
let gs=gameContainer.style;
gs.backgroundColor="black";
gs.width=`${columnSize*btnWidth}rem`;
gs.height=`${rowSize*btnHeight}rem`;


let row=document.createElement("div");

let btn=document.createElement("button");

/*
for(let i=0;i<rowSize;i++){
    for(let j=0;j<columnSize;j++){
        btn.innerText=i*columnSize+j+1;
        let bs=btn.style;
        bs.width=`${btnWidth}rem`;
        bs.height==`${btnHeight}rem`;
        row.appendChild(btn);
    }
    gameContainer.appendChild(row);
}
*/

btn.innerText=1;
/*
btn.innerText=2;
btn.innerText=3;
*/
let bs=btn.style;
bs.width=`${btnWidth}rem`;
bs.height==`${btnHeight}rem`;

row.appendChild(btn);


btn.innerText=2;
row.appendChild(btn);


gameContainer.appendChild(row);
app.appendChild(gameContainer);

