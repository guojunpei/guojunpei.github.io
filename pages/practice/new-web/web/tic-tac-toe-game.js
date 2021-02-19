class TicTacToeGame{
    constructor(player1name,player2name){
      this.player1name=player1name;
      this.player2name=player2name;
      this.player1pieces="";
      this.player2pieces="";
      this.l=[this.player1name+" VS "+this.player2name,"   ","   ","   ","   ","   ","   ","   ","   ","   "];
      this.m=3;
      this.n=3;
      this.q=0;
      this.whosturn="";
      this.place="";
      this.result="";
      this.history=[];
      this.getResult();
      this.showChessBoard();
    }
  
    getResult(){
      if(this.q===0){
        this.result="Please type:yourgame.chooseMode(m,n,q) \nNow only supports m=n=q>=3";
        return;
      }
      if(this.player1pieces===""){
        this.result="Please "+this.player1name+" type:yourgame.choosePieces('x'or'+')";
        return; 
      }
      if(this.player2pieces===""){
        this.result="Please "+this.player2name+" type:yourgame.choosePieces('o'or'0')";
        return;
      }
      if(this.whosturn===""){
        for(let i=1;i<this.m*this.n+1;i++){this.l[i]=i}
        this.result="Please first player type:yourgame.choosePlace('playername','place'like'1')";
        return;
      }
      else{
        this.result=this.whosturn+"'s turn is done! Please the other player type:yourgame.choosePlace('playername','place'like'2')";
      }
      this.win();
    }
  
    save(){
      this.history.push({date: new Date(), who:this.whosturn, place:this.place})
    }
  
    choosePieces(pieces){
      if(this.player1pieces===""){this.player1pieces=pieces;}
      else{
        this.player2pieces=pieces;
      }
      this.getResult();
      this.showChessBoard();
    }
  
    choosePlace(playername,place){
      this.whosturn=playername;
      this.place=place;
      for(let i=1;i<this.m*this.n+1;i++){
        if(place===i){
          if(playername===this.player1name){
            this.l[i]=this.player1pieces
          }
          else{
            this.l[i]=this.player2pieces
          }
        }
      }
      this.getResult();
      this.showChessBoard();
      this.save();
    }
  
    chooseMode(m,n,q){
      this.m=m;
      this.n=n;
      this.q=q;
      this.l=[this.player1name+" VS "+this.player2name];
      for(let i=1;i<this.m*this.n+1;i++){this.l.push(" ")}
      this.getResult();
      this.showChessBoard();
    }
  
    win(){
      for(let j=1;j<this.m+1;j++){
        let v=this.l[(j-1)*this.n+1];
        let vn=0;
        for(let i=(j-1)*this.n+2;i<j*this.n+1;i++){
          if(this.l[i]===v && v!==""){vn+=1}
        }
        if(vn===this.n-1){
          this.result="Game over!\nWinner is "+this.whosturn;
          return;
        }
      }
      
      for(let j=1;j<this.m+1;j++){
        let v=this.l[j];
        let vn=0;
        for(let i=j+this.n;i<this.n*(this.n-1)+this.m+1;i+=this.n){
          if(this.l[i]===v && v!==""){vn+=1}
        }
        if(vn===this.n-1){
          this.result="Game over!\nWinner is "+this.whosturn;
          return;
        }
      }
         
      let v1=this.l[1];
      let vn1=0;
      for(let i=this.n+2;i<this.n*this.m+1;i+=this.n+1){if(this.l[i]===v1 && v1!==""){vn1+=1}}
      if(vn1===this.n-1){
        this.result="Game over!\nWinner is "+this.whosturn;
        return;
      }
    
      let v2=this.l[this.n];
      let vn2=0;
      for(let i=2*this.n-1;i<this.n*this.m-this.n+1+1;i+=this.n-1){if(this.l[i]===v2 && v2!==""){vn2+=1}}
      if(vn2===this.n-1){
        this.result="Game over!\nWinner is "+this.whosturn;
        return;
      }
    
    }
  
    showChessBoard(){
      let chessboard= "╔";
      for(let i=0;i<this.n-1;i++){chessboard+="═══╦"}
      chessboard+="═══╗\n";
        
      for(let i=0;i<this.n;i++){chessboard+="║"+this.l[i+1]+""}
      chessboard+="║\n";
        
      for(let j=0;j<this.m-1;j++){
        chessboard+="╠";
        for(let i=1;i<this.n;i++){chessboard+="═══╬"}
        chessboard+="═══╣\n";
        for(let i=0;i<this.n;i++){chessboard+="║"+this.l[i+1+(j+1)*this.n]+""}
        chessboard+="║\n";
      }
        
      chessboard+= "╚";
      for(let i=0;i<this.n-1;i++){chessboard+="═══╩"}
      chessboard+="═══╝\n";
        
      chessboard+=this.result;
        
      console.log(chessboard);
    }
}
  
const a=new TicTacToeGame(1,2);

let app=document.getElementById("app-tic-tac-toe-game");
app.style.display="flex";
app.style.justifyContent="center";
app.style.alignItems="center";
app.style.height="100%";
app.style.width="100%";
app.style.padding="0";
app.style.margin="0";
app.style.backgroundColor="black";

let rowSize=this.m;
let columnSize=this.n;
let btnWidth=3;
let btnHeight=3;


let gameSet=document.createElement("div");
let playerNamneInput1=document.createElement("div");
let playerNamneInput2=document.createElement("div");
let gameMode=document.createElement("div");

gameSet.appendChild(playerNamneInput1);
gameSet.appendChild(playerNamneInput2);
gameSet.appendChild(gameMode);
app.appendChild(gameSet);

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
        btn.onclick=choosePlace(this.whosturn,btn.innerText);
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


let gameState=document.createElement("div");
let statePlay1=document.createElement("p");
let statePlay2=document.createElement("p");
let stateResult=document.createElement("p");

statePlay1.innerText=this.player1name;
statePlay2.innerText=this.player2name;
stateResult.innerText=this.result;

gameState.appendChild(statePlay1);
gameState.appendChild(statePlay1);
gameState.appendChild(stateResult);
app.appendChild(gameState);

