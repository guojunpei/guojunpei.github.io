class TicTacToeGame{
  constructor(player1name,player2name){
    this.player1name=player1name;
    this.player2name=player2name;
    this.player1pieces="";
    this.player2pieces="";
    this.l=[this.player1name+"VS"+this.player2name];
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
      for(let i=1;i<this.m*this.n+1;i++){this.l.push(" ")}
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
    for(let i=1;i<this.m*this.n+1;i++){this.l.push(i)}
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
      if(vn===this.n-1){return "win"}
    }
    
    for(let j=1;j<this.m+1;j++){
      let v=this.l[j];
      let vn=0;
      for(let i=j+this.n;i<this.n*(this.n-1)+this.m+1;i+=this.n){
        if(this.l[i]===v && v!==""){vn+=1}
      }
      if(vn===this.n-1){return "win"}
    }
       
    let v1=this.l[1];
    let vn1=0;
    for(let i=this.n+2;i<this.n*this.m+1;i+=this.n+1){if(this.l[i]===v1 && v1!==""){vn1+=1}}
    if(vn1===this.n-1){return "win"}
  
    let v2=this.l[n];
    let vn2=0;
    for(let i=2*this.n-1;i<this.n*this.m-this.n+1+1;i+=this.n-1){if(this.l[i]===v2 && v2!==""){vn2+=1}}
    if(vn2===this.n-1){return "win"}
  
  }

  showChessBoard(){
    let chessboard= "╔";
    for(let i=0;i<this.n-1;i++){chessboard+="═══╦"}
    chessboard+="═══╗\n";
      
    for(let i=0;i<this.n;i++){chessboard+="║ "+this.l[i+1]+" "}
    chessboard+="║\n";
      
    for(let j=0;j<this.m-1;j++){
      chessboard+="╠";
      for(let i=1;i<this.n;i++){chessboard+="═══╬"}
      chessboard+="═══╣\n";
      for(let i=0;i<this.n;i++){chessboard+="║ "+this.l[i+1+(j+1)*this.n]+" "}
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

//"win(m,n)"
/*
let l=[];
let l=[ " ", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let l=[ " ", "1", "1", "3", "4", "5", "6", "7", "8", "9"];
let l=[ " ", "1", "1", "1", "4", "5", "6", "7", "8", "9"];
let l=[ " ", "1", "2", "3", "1", "5", "6", "1", "8", "9"];
let l=[ " ", "1", "2", "3", "4", "1", "6", "7", "8", "1"];

function win(m,n){
  for(let j=1;j<m+1;j++){
    let v=l[(j-1)*n+1];
    let vn=0;
    for(let i=(j-1)*n+2;i<j*n+1;i++){
      if(l[i]===v && v!==" "){vn+=1}
    }
    if(vn===n-1){return "win"}
  }
  
  for(let j=1;j<m+1;j++){
    let v=l[j];
    let vn=0;
    for(let i=j+n;i<n*(n-1)+m+1;i+=n){
      if(l[i]===v && v!==" "){vn+=1}
    }
    if(vn===n-1){return "win"}
  }
     
  let v1=l[1];
  let vn1=0;
  for(let i=n+2;i<n*m+1;i+=n+1){if(l[i]===v1 && v1!==" "){vn1+=1}}
  if(vn1===n-1){return "win"}

  let v2=l[n];
  let vn2=0;
  for(let i=2*n-1;i<n*m-n+1+1;i+=n-1){if(l[i]===v2 && v2!==" "){vn2+=1}}
  if(vn2===n-1){return "win"}

}


let l=[];
win(3,3);

let l=[ " ", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
win(3,3);

let l=[ " ", "1", "1", "3", "4", "5", "6", "7", "8", "9"];
win(3,3);

let l=[ " ", "1", "1", "1", "4", "5", "6", "7", "8", "9"];
win(3,3);
"win"

let l=[ " ", "1", "2", "3", "1", "5", "6", "1", "8", "9"];
win(3,3);
"win"

let l=[ " ", "1", "2", "3", "4", "1", "6", "7", "8", "1"];
win(3,3);
"win"



function win(m,n){
  for(let j=1;j<m+1;j++){
    let v=l[(j-1)*n+1];
    for(let i=(j-1)*n+2;i<j*n+1;i++){
      if(l[i]===v && v!==" "){return "win"}
    }
  }

  for(let j=1;j<m+1;j++){
    let v=l[j];
    for(let i=j+n;i<n*(n-1)+m+1;i+=n){
      if(l[i]===v && v!==" "){return "win"}
    }
  }
   
  let v1=l[1];
  for(let i=n+2;i<n*m+1;i+=n+1){if(l[i]===v1 && v1!==" "){return "win"}}

  let v2=l[n];
  for(let i=2*n-1;i<n*m-n+1+1;i+=n-1){if(l[i]===v2 && v2!==" "){return "win"}}
}

let l=[];
win(3,3);

let l=[ " ", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
win(3,3);

let l=[ " ", "1", "1", "3", "4", "5", "6", "7", "8", "9"];
win(3,3);
"win"

let l=[ " ", "1", "1", "1", "4", "5", "6", "7", "8", "9"];
win(3,3);
"win"

let l=[ " ", "1", "2", "3", "1", "5", "6", "1", "8", "9"];
win(3,3);
"win"

let l=[ " ", "1", "2", "3", "4", "1", "6", "7", "8", "1"];
win(3,3);
"win"

*/

//"showChessBoard()"
/*
let l=[ " ", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let result=""

function ShowChessBoard(m,n){
  let chessboard= "╔";
  for(let i=0;i<n-1;i++){chessboard+="═══╦"}
  chessboard+="═══╗\n";
  
  for(let i=0;i<n;i++){chessboard+="║ "+l[i+1]+" "}
  chessboard+="║\n";
  
  for(let j=0;j<m-1;j++){
    chessboard+="╠";
    for(let i=1;i<n;i++){chessboard+="═══╬"}
    chessboard+="═══╣\n";
    for(let i=0;i<n;i++){chessboard+="║ "+l[i+1+(j+1)*n]+" "}
    chessboard+="║\n";
  }
  
  chessboard+= "╚";
  for(let i=0;i<n-1;i++){chessboard+="═══╩"}
  chessboard+="═══╝\n";
  
  chessboard+=result;
  
  console.log(chessboard);
}

ShowChessBoard(3,3);

╔═══╦═══╦═══╗
║ 1 ║ 2 ║ 3 ║
╠═══╬═══╬═══╣
║ 4 ║ 5 ║ 6 ║
╠═══╬═══╬═══╣
║ 7 ║ 8 ║ 9 ║
╚═══╩═══╩═══╝


          "╔"+(this.n-1)*"═══╦"+"═══╗\n"
          "║"+(this.n-1)*"║"+"║\n"
this.m-1*("╠"+(this.n-1)*"═══╬"+"═══╣\n"
          "║"+(this.n-1)*"║"+"║\n"       )
          "╚"+(this.n-1)*"═══╩"+"═══╝\n"
╔═══╦═══╦═══╗\n
║
╠═══╬═══╬═══╣\n
║
╠═══╬═══╬═══╣\n
║
╚═══╩═══╩═══╝
*/


//"井字游戏1.0"
/*
let p1=" ";
let p2=" ";
let p1n="play1's name";
let p2n="play2's name";
let zt="  What's your name?  Please player 1 type 'name('yourname')'.";
let a1="  ";
let a2="  ";
let a3="  ";
let b1="  ";
let b2="  ";
let b3="  ";
let c1="  ";
let c2="  ";
let c3="  ";

function game(){
  let qipan= "╔═══╦═══╦═══╗\n║ "+a1+"║ "+a2+"║ "+a3+"║"+"  x:"+p1n+"\n╠═══╬═══╬═══╣\n║ "+b1+"║ "+b2+"║ "+b3+"║"+"  o:"+p2n+"\n╠═══╬═══╬═══╣\n║ "+c1+"║ "+c2+"║ "+c3+"║"+zt+"\n╚═══╩═══╩═══╝";
  console.log(qipan);
}

function name(n){
  if(p1===" "){
    p1n=n;
    p1=n;
    zt="  Welcome~ "+n+"! What's your name, player 2 ? Please player 2 type 'name('yourname')'.";
  }
  else{
    p2n=n;
    p2=n;
    zt="  Welcome~ "+n+"! Please "+p1+" start the game with type 'luozi('p1' or play's name,weizhi like 'a1')'";
    a1="a1";
    a2="a2";
    a3="a3";
    b1="b1";
    b2="b2";
    b3="b3";
    c1="c1";
    c2="c2";
    c3="c3";
  }
  game();
}

function again(){
  a1="a1";
  a2="a2";
  a3="a3";
  b1="b1";
  b2="b2";
  b3="b3";
  c1="c1";
  c2="c2";
  c3="c3";
  zt="  Please "+p1+"start the game with type 'luozi('p1' or play's name,weizhi like 'a1')'";
  game();
}

function exchange(){
  p0=p2;
  p2=p1;
  p1=p0;
  p0n=p2n;
  p2n=p1n;
  p1n=p0n;
  a1="a1";
  a2="a2";
  a3="a3";
  b1="b1";
  b2="b2";
  b3="b3";
  c1="c1";
  c2="c2";
  c3="c3";
  zt="  Please "+p1+" start the game with type 'luozi('p1' or play's name,weizhi like 'a1')'";
  game();
}

function luozi(p,q){
  if(p===p1){qizi="x ";zt="  x: "+q+"; o 's time! Please "+p2+" type 'luozi('p1' or play's name,weizhi like 'a1')'";}
  if(p===p2){qizi="o ";zt="  x: "+q+"; x 's time! Please "+p1+" type 'luozi('p1' or play's name,weizhi like 'a1')'";}
  if(q===a1){a1=qizi;}
  if(q===a2){a2=qizi;}
  if(q===a3){a3=qizi;}
  if(q===b1){b1=qizi;}
  if(q===b2){b2=qizi;}
  if(q===b3){b3=qizi;}
  if(q===c1){c1=qizi;}
  if(q===c2){c2=qizi;}
  if(q===c3){c3=qizi;}
  if(a1===a2 && a1===a3 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  if(b1===b2 && b1===b3 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  if(c1===c2 && c1===c3 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  if(a1===b1 && a1===c1 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  if(a2===b2 && a2===c2 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  if(a3===b3 && a3===c3 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  if(a1===b2 && a1===c3 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  if(a3===b2 && a3===c1 ){zt="  Game over! Winer is "+p+"! One more? Please tpye 'again()'! Exchange and again? Please tpye 'exchange()'!";}
  game();
}
*/

/*
let qipan= "╔═══╦═══╦═══╗\n║ x ║ o ║ x ║\n╠═══╬═══╬═══╣\n║ x ║   ║ x ║\n╠═══╬═══╬═══╣\n║ x ║ o ║ x ║\n╚═══╩═══╩═══╝"
console.log(qipan)
*/
/*
╔═══╦═══╦═══╗
║ x ║ o ║ x ║
╠═══╬═══╬═══╣
║ x ║ o ║ x ║
╠═══╬═══╬═══╣
║ x ║ o ║ x ║
╚═══╩═══╩═══╝
*/



//"井字游戏2.0"
/*
class TicTacToeGame{
  constructor(player1name,player2name){
    this.player1name=player1name;
    this.player2name=player2name;
    this.player1pieces="";
    this.player2pieces="";
    this.whosturn="";
    this.place="";
    this.a1="  ";
    this.a2="  ";
    this.a3="  ";
    this.b1="  ";
    this.b2="  ";
    this.b3="  ";
    this.c1="  ";
    this.c2="  ";
    this.c3="  ";
    this.result="";
    this.history=[];
    this.getResult();
    this.showChessBoard();
  }

  showChessBoard(){
    let chessboard= "╔═══╦═══╦═══╗\n║ "+this.a1+"║ "+this.a2+"║ "+this.a3+"║  "+this.player1pieces+":"+this.player1name+"\n╠═══╬═══╬═══╣\n║ "+this.b1+"║ "+this.b2+"║ "+this.b3+"║  "+this.player2pieces+":"+this.player2name+"\n╠═══╬═══╬═══╣\n║ "+this.c1+"║ "+this.c2+"║ "+this.c3+"║  "+this.result+"\n╚═══╩═══╩═══╝";
    console.log(chessboard);
  }

  getResult(){
    if(this.player1pieces===""){return this.result="Please "+this.player1name+" type:yourgame.choosePieces('x'or'+')";}
    if(this.player2pieces===""){return this.result="Please "+this.player2name+" type:yourgame.choosePieces('o'or'0')";}
    if(this.whosturn===""){
      this.a1="a1";
      this.a2="a2";
      this.a3="a3";
      this.b1="b1";
      this.b2="b2";
      this.b3="b3";
      this.c1="c1";
      this.c2="c2";
      this.c3="c3";
      return this.result="Please first player type:yourgame.choosePlace('playername','place'like'a1')";}
    else{
      this.result=this.whosturn+"'s turn is done! Please the other player type:yourgame.choosePlace('playername','place'like'a2')";
    }
    if(this.a1===this.a2 && this.a1===this.a3 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
    if(this.b1===this.b2 && this.b1===this.b3 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
    if(this.c1===this.c2 && this.c1===this.c3 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
    if(this.a1===this.b1 && this.a1===this.c1 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
    if(this.a2===this.b2 && this.a2===this.c2 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
    if(this.a3===this.b3 && this.a3===this.c3 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
    if(this.a1===this.b2 && this.a1===this.c3 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
    if(this.a3===this.b2 && this.a3===this.c1 && this.a1!=="  "){return this.result="Game over! Winer is "+this.whosturn+"!";}
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
    let pieces="";
    if(playername===this.player1name){pieces=this.player1pieces+" ";}
    if(playername===this.player2name){pieces=this.player2pieces+" ";}
    if(place==="a1"){this.a1=pieces;}
    if(place==="a2"){this.a2=pieces;}
    if(place==="a3"){this.a3=pieces;}
    if(place==="b1"){this.b1=pieces;}
    if(place==="b2"){this.b2=pieces;}
    if(place==="b3"){this.b3=pieces;}
    if(place==="c1"){this.c1=pieces;}
    if(place==="c2"){this.c2=pieces;}
    if(place==="c3"){this.c3=pieces;}
    this.getResult();
    this.showChessBoard();
    this.save();
  }
}

const a=new TicTacToeGame(1,2);
*/
