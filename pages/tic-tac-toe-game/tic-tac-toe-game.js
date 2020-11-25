//import "./tic-tac-toe-game.css";

const app = document.getElementById("app-tic-tac-toe-game");

const rowSize = 3;
const colSize = 4;
const btnWidth = 80;
const btnMargin = 2;
const containerPadding = 10;

const container = document.createElement("div");
container.style.backgroundColor = "#212F3D";
container.style.padding = `${containerPadding}px`;
container.style.width = `${rowSize * (btnWidth + btnMargin * 2)}px`;

for (let i = 0; i < colSize; i++) {
  const row = document.createElement("div");

  for (let j = 0; j < rowSize; j++) {
    const btn = document.createElement("button");
    btn.innerText = j + colSize * i;
    const s = btn.style;
    s.margin = `${btnMargin}px`;
    s.width = `${btnWidth}px`;
    s.height = "50px";
    s.backgroundColor = "#566573";
    s.color = "#EB984E";
    s.fontSize = "20px";
    s.borderStyle = "none";
    row.appendChild(btn);
  }
  container.appendChild(row);
}

app.appendChild(container);


/*
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
*/
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

/*
btn.innerText=1;

let bs=btn.style;
bs.width=`${btnWidth}rem`;
bs.height==`${btnHeight}rem`;

row.appendChild(btn);


btn.innerText=2;
row.appendChild(btn);


gameContainer.appendChild(row);
app.appendChild(gameContainer);
*/
