
class Square extends build {
  build() {
    return `
    <button class="square">{/* TODO */}</button>;
    `
  }
}

class Board extends build {
  buildSquare(i) {
    return Square;
  }

build() {
  const status = 'Next player: X';
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.buildSquare(0)}
        {this.buildSquare(1)}
        {this.buildSquare(2)}
      </div>
      <div className="board-row">
        {this.buildSquare(3)}
        {this.buildSquare(4)}
        {this.buildSquare(5)}
      </div>
      <div className="board-row">
        {this.buildSquare(6)}
        {this.buildSquare(7)}
        {this.buildSquare(8)}
      </div>
      </div>
    );
  }
}

class Game extends React.Component {
  build() {
    return (`
    <div class="game">
    <div class="game-board">
      ${Board}
    </div>
    <div class="game-info">
      <div>${status}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
    
    `
    );
  }
}

// ========================================

build(<Game />, document.getElementById('root'));


