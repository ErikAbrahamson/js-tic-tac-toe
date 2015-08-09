function Game() {
  this.board = new Board();
  this.turnCounter = 0;
  this.player1 = new Player('x');
  this.player2 = new Player('o');
}

function Player(team) {
  this.team = team;
  this.cellId = null;
  this.playerScore = 0;
}

function Board() {
  this.$cells = $('.box');
  this.moveArr = [null, null, null, null, null, null, null, null, null];
  $('#reset').on('click', function() {
    game.board.resetBoard();
  });
}

Game.prototype.nextPlayer = function() {
  this.turnCounter++;
  this.board.checkWinner();
  if (this.currentPlayer === this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
  $('#your-turn').text(" Player " + this.currentPlayer.team);
};

Game.prototype.updateScore = function(currentPlayer) {
  if (currentPlayer === game.player1.team) {
    $('#oneScore').text(game.player1.playerScore);
  } else {
    $('#twoScore').text(game.player2.playerScore);
  }
};

Game.prototype.init = function() {
  this.currentPlayer = this.player1;
  $(game.board.$cells).on('click', function(event) {
    game.board.makeMove();
  });
};

Board.prototype.makeMove = function() {
  if ($(event.target).html() === '&nbsp;') {
    $(event.target).text(game.currentPlayer.team);
    var currentCell = parseInt(event.target.id);
    this.moveArr[currentCell] = game.currentPlayer.team;
    game.nextPlayer();
  } else {
    alert("This square is already taken!");
  }
};

Board.prototype.winCondition = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]
];

Board.prototype.checkWinner = function() {
  var winner = false;
  for (var i = 0; i < this.winCondition.length; i++) {
    if (game.board.moveArr[this.winCondition[i][0]] === (game.currentPlayer.team) &&
      game.board.moveArr[this.winCondition[i][1]] === (game.currentPlayer.team) &&
      game.board.moveArr[this.winCondition[i][2]] === (game.currentPlayer.team)) {
      winner = true;
    }
  }
  if (winner) {
    alert('Player ' + game.currentPlayer.team + ' wins');
    game.currentPlayer.playerScore++;
    game.updateScore(game.currentPlayer.team);
    game.board.resetBoard();
  }
  this.winner = false;
  if (game.turnCounter === 9 && game.board.winner === false) {
    alert('tie');
    game.board.resetBoard();
  }
};

Board.prototype.resetBoard = function() {
  game.board.$cells.html('&nbsp;');
  game.board.nullArray();
  game.turnCounter = 0;
};

Board.prototype.nullArray = function() {
  this.moveArr = game.board.moveArr.map(function(val, i) {
    return val !== null ? null : val;
  });
};

var game = new Game();
game.init();
