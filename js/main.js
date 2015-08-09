function Game() {
  this.turnCounter = 1;
  this.board = new Board();
  this.player1 = new Player('x');
  this.player2 = new Player('o');
}
function Player(team, cellID, playerScore) {
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
Player.prototype.nextPlayer = function() {
  if (this.turnCounter === 1) {
    this.turnCounter = 2;
  } else if (this.turnCounter === 2) {
    this.turnCounter = 1;
  }
};
Player.prototype.makeMove = function() {
  this.moveArr.push(this.cellID);
};

$(document).ready(function() {
  $('.box').on('click', function(event) {
    event.preventDefault();
    $(this).text('x');
    nextPlayer();
  });
});
