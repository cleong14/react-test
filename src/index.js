import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//renders single <button>
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button> //passing a function as the onClick - onClick={alert()}
    );
  }
}

//renders 9 squares
class Board extends React.Component {
  constructor() { //this sets initial state to contain an array with 9 nulls, corresponding to the 9 squares
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return ( //added parens so that javascript doesnt insert semicolon after return and break our code
      <Square
        value={this.state.squares[i]} //split for readability
        onClick={() => this.handleClick(i)} //value and onClick are considered props being passed down from parent to child
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//renders board with placeholders that will be filled in later
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
