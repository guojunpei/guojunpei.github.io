class TicTacToeGame{
  constructor(player1name,player2name){
    this.player1name=player1name;
    this.player2name=player2name;
    this.player1pieces="";
    this.player2pieces="";
    this.l=["chess board"];
    this.m=3;
    this.n=3;
    this.q=3;
    this.whosturn="";
    this.place="";
    this.result="";
    this.history=[];
    this.getResult();
    this.showChessBoard();
  }

  getResult(){
    if(this.player1pieces===""){return this.result="Please "+this.player1name+" type:yourgame.choosePieces('x'or'+')";}
    if(this.player2pieces===""){return this.result="Please "+this.player2name+" type:yourgame.choosePieces('o'or'0')";}
    if(this.whosturn===""){
      return this.result="Please first player type:yourgame.choosePlace('playername','place'like'a1')";}
    else{
      this.result=this.whosturn+"'s turn is done! Please the other player type:yourgame.choosePlace('playername','place'like'a2')";
    }
    this.win;
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

    this.getResult();
    this.showChessBoard();
    this.save();
  }

  chooseMode(m,n,q){
    this.m=m;
    this.n=n;
    this.q=q;
    for(i=0;i<m*n;i++){l.push(" ")}
  }

  win(){
    for(j=1;j<this.m+1;j++){
      let v=this.l[(j-1)*this.n+1];
      for(i=(j-1)*this.n+2;i<j*this.n+1;i++){
        if(this.l[i]===v && v!==" "){this.result="Winer is "+this.whosturn}
      }
    }
  
    for(j=1;j<this.m+1;j++){
      let v=this.l[j];
      for(i=j+this.n;i<this.n*(this.n-1)+this.m+1;i+=this.n){
        if(this.l[i]===v && v!==" "){this.result="Winer is "+this.whosturn}
      }
    }
     
    let v1=this.l[1];
    for(i=this.n+2;i<this.n*this.m+1;i+=this.n+1){if(this.l[i]===v1 && v1!==" "){this.result="Winer is "+this.whosturn}}
  
    let v2=this.l[this.n];
    for(i=2*this.n-1;i<this.n*this.m-this.n+2;i+=this.n-1){if(this.l[i]===v2 && v2!==" "){this.result="Winer is "+this.whosturn}}
  }

  showChessBoard(){
    let chessboard= "╔";
    for(i=0;i<this.n-1;i++){chessboard+="═══╦"}
    chessboard+="═══╗\n";

    for(i=0;i<this.n;i++){chessboard+="║"+this.l[i+1]}
    chessboard+="║\n";

    for(j=0;j<this.m-1;j++){
      chessboard+="╠";
      for(i=0;i<this.n;i++){chessboard+="═══╬"}
      chessboard+="═══╣\n";
      for(i=0;i<this.n;i++){chessboard+="║"+this.l[i+1+(j+1)*this.n]}
      chessboard+="║\n";
    }

    chessboard+= "╚";
    for(i=0;i<this.n-1;i++){chessboard+="═══╩"}
    chessboard+="═══╝\n";

    chessboard+=this.result;

    console.log(chessboard);
  }
}