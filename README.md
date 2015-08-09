# JavaScript Tic-Tac-Toe

Using an object-orieneted approach, create a tic-tac-toe game to practice JavaScript/jQuery, OOP, and unit testing with Jasmine.

## Requirements

### Game

#### Constructor

1. Create a `Game()` class that creates instances of the `Board()` class, `Players()` class (you need two players) and has a `turnCounter` property to indicate whose turn it is and determine the winner in case of a draw.

### Methods

1. `nextPlayer()` - sets the turn based on the `turnCounter`, checks the winner from the `Board()` class, and updates the DOM.
1. `updateScore()` - updates the scroreboard based on the `playerScore` from the `Player()` class. Updates the DOM.
1. `init()` - initializes a new game with a board and two players. Make sure to add a click event handler for each of the board's cells on the DOM. This should in turn call the `makeMove()` method on the `Board()` class.

### Player

#### Constructor

1. Create a `Player()` class that has a `team`, `cellID`, and `playerScore` property.

### Board

#### Constructor

1. Create a `Board()` class that has a 'moveArr' property with a `null` array to hold the moves along with a `$cells` property to assign each cell to a box in the DOM. Finally, add an event handler on the reset button to call the `resetBoard()` method.

### Methods

1. `makeMove()` - sets a box to a player/team and updates the `moveArr` array. Make sure to prevent occupied boxes from being used (alert the user).
1. `winCondition()` - array which holds the winining conditions for the board
1. `checkWinner()` - checks the board for winning combinations against the values of each player/team and alerts the players which player won or if it's a tie
1. `resetBoard()` - resets the board to its initial state and resets the `moveArr` holding the player values (via the `nullArray()` method) and turn counter
1. `nullArray()` - resets the `moveArr`

## What else?

1. Test!
1. Start the game:

  ```javascript
  var game = new Game();
  game.init();
  ```
