
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
    this.getresult();
    this.showchessboard();
  }

  showchessboard(){
    let chessboard= "╔═══╦═══╦═══╗\n║ "+this.a1+"║ "+this.a2+"║ "+this.a3+"║"+"  "+this.player1pieces+":"+this.player1name+"\n╠═══╬═══╬═══╣\n║ "+this.b1+"║ "+this.b2+"║ "+this.b3+"║"+"  "+this.player2pieces+":"+this.player2name+"\n╠═══╬═══╬═══╣\n║ "+this.c1+"║ "+this.c2+"║ "+this.c3+"║"+this.result+"\n╚═══╩═══╩═══╝";
    console.log(chessboard);
  }

  getresult(){
    if(this.player1pieces===""){return this.result="Please "+this.player1name+" type:yourgame.choosepieces('x'or'+')";}
    if(this.player2pieces===""){return this.result="Please "+this.player2name+" type:yourgame.choosepieces('o'or'0')";}
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
      return this.result="Please first player type:yourgame.chooseplace('playerpieces'like'x','place'like'a1')";}
    else{
      this.result=this.whosturn+"'s turn is done! Please the oher player type:yourgame.chooseplace('playername','place')";
    }
    if(this.a1===this.a2 && this.a1===this.a3 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
    if(this.b1===this.b2 && this.b1===this.b3 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
    if(this.c1===this.c2 && this.c1===this.c3 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
    if(this.a1===this.b1 && this.a1===this.c1 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
    if(this.a2===this.b2 && this.a2===this.c2 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
    if(this.a3===this.b3 && this.a3===this.c3 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
    if(this.a1===this.b2 && this.a1===this.c3 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
    if(this.a3===this.b2 && this.a3===this.c1 && this.a1!=="  "){this.result="Game over! Winer is "+this.playername+"!";}
  }

  save(){
    this.history.push({date: new Date(), who:this.whosturn, place:this.place})
  }

  choosepieces(pieces){
    if(this.player1pieces===""){this.player1pieces=pieces;}
    else{
      this.player2pieces=pieces;
    }
    this.getresult();
    this.showchessboard();
  }

  chooseplace(pieces,place){
    this.whosturn=pieces;
    this.place=place;
    if(place==="a1"){this.a1=pieces;}
    if(place==="a2"){this.a2=pieces;}
    if(place==="a3"){this.a3=pieces;}
    if(place==="b1"){this.b1=pieces;}
    if(place==="b2"){this.b2=pieces;}
    if(place==="b3"){this.b3=pieces;}
    if(place==="c1"){this.c1=pieces;}
    if(place==="c2"){this.c2=pieces;}
    if(place==="c3"){this.c3=pieces;}
    this.getresult();
    this.showchessboard();
    this.save();
  }
}

const a=new TicTacToeGame(1,2);
