/*
FIRST ITERATION - (VERY) BASIC FUNCTIONALITY
 
Classes: 

- Two players
- One board
- Very basic game logic

Events:
- player clicks on board 'deck' and adds one 'card' to their hand (Player class method ?)
- then switch to the next player (Game class method ? )


*/

class Player {
  constructor(name) {
    this._name = name;
    this._hand = [];
  }
  addCard(card){
      this._hand.push(card)
  }
  get hand(){
      return this._hand;
  }
}

class Board {
  constructor(main, discarded) {
    this._mainPile = main;
    this._discardPile = discarded;
  }
  get mainPile(){
      return this._mainPile;
  }
  get discardPile(){
      return this._discardPile;

  }
}

class Game {
  constructor(board) {
    this._board = board;
    this._turn = 0;
    this._players = {
        player1 = new Player("Player 1"),
        player2 = new Player("Player 2")
    };
  }
  addMainPileListener(){
      this._board.mainPile.addEventListener("click", (event) => {
          console.log("main clicked")
      })

  }
  addDiscardPileListner(){
       this._board.discardPile.addEventListener("click", (event) => {
          console.log("discarded clicked")
      })

  }
}

const board = new Board(document.getElementById("main_pile"), document.getElementById("discard_pile"))

const tens = new Game(board)
