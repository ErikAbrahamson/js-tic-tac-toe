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
  console.log(this.moveArr);
  console.log(this.cellID);
};
Board.prototype.winCondition = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
 ];
 Board.prototype.checkWinner = function(cellID) {
  for (var i = 0; i < this.checkWinner.length; i++) {
    if ((this.checkWinner[i][0] == this.moveArr[cellID])
      && (this.checkWinner[i][1] == this.moveArr[cellID])
      && (this.checkWinner[i][2] == this.moveArr[cellID])) {
       console.log('winner');
    } else {
      console.log('no winner');
    }
  }
};


$(document).ready(function() {
  var game = new Game();
  game.currentPlayer = game.player1;
  console.log(game.board);
  $('.box').on('click', function(event) {
    event.preventDefault();
    if ($(this).html() === '&nbsp;') {
      $(this).text(game.currentPlayer.team);
      var cellID = $(this).attr('id');
      game.board.makeMove(cellID, game.currentPlayer.team);
      console.log(cellID);
      game.nextPlayer();
      game.board.checkWinner(cellID);

    } else {
      alert('space already taken you fool!');
    }
  });
});
