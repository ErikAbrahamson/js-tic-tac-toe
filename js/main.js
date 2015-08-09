function Game() {
  this.turnCounter = 1;
  this.board = new Board();
  this.player1 = new Player('x');
  this.player2 = new Player('o');
}
function Player(team, cellID) {
  this.team = team;
  this.cellID = cellID || null;
  this.playerScore = 0;
}
function Board() {
  this.$cells = $('.box');
  this.moveArr = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
}
Game.prototype.nextPlayer = function() {
  if (this.turnCounter === 1) {
    this.turnCounter = 2;
    this.currentPlayer = this.player2;
  } else {
    this.turnCounter = 1;
    this.currentPlayer = this.player1;
  }
};
Board.prototype.makeMove = function(cellID, team) {
  this.moveArr[cellID] = team;
};
Board.prototype.winCondition = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
 ];
 Board.prototype.checkWinner = function(team) {
  console.log(team);
  console.log(this.moveArr);
  for (var i = 0; i < this.winCondition.length; i++) {
    if ((this.moveArr[this.winCondition[i][0]] === team)
      && (this.moveArr[this.winCondition[i][1]] === team)
      && (this.moveArr[this.winCondition[i][2]] === team)) {
        console.log('winner');
      }
    }
};


$(document).ready(function() {
  game.currentPlayer = game.player1;
  $('.box').on('click', function(event) {
    event.preventDefault();
    if ($(this).html() === '&nbsp;') {
      $(this).text(game.currentPlayer.team);
      var cellID = $(this).attr('id');
      game.board.makeMove(cellID, game.currentPlayer.team);
      game.board.checkWinner(game.currentPlayer.team);
      game.nextPlayer();
    } else {
      alert('space already taken you fool!');
    }
  });
});

var game = new Game();
