const prompt = require("prompt-sync")({ sigint: true });
//Done : Game elements / assets
const GRASS = "░";
const HOLE = "O"; //Capital O
const HAT = "^";
const PLAYER = "*";
// Done :  UP / DOWN / LEFT / RIGHT / QUIT keyboard constants

const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID message constants
const MSG_UP = "You Moved Up.";
const MSG_DOWN = "You Moved down.";
const MSG_LEFT = "You Moved left.";
const MSG_RIGHT = "You Moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid Entry.";
const MSG_WELCOME =
  "\n***************************\nWelcome to Find your hat\n***************************\n";

// Done: WIN / LOSE / OUT / QUIT messages constants
const WIN = "Congrats , you won!";
const LOSE = "You fell into a hole, you lost!";
const OUT = "Outta play area, you lost";

// TODO: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2; // Percentage of randomness

class Field {
  /**
   *  TODO: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {*} field
   */
  constructor(field = null) {
    // the field for the game
    this.field = field;
    this.gamePlay = false; //game is by default  = false
    this.playerPosition = { x: 0, y: 0 }; //Player position is by default X:0 , Y:0
  }
  /**
   *
   */
  static generateField(rows = 8, cols = 8, percent = 0.1) {
    const map = new Array();
    for (let row = 0; row < rows; row++) {
      map[row] = new Array(); // or can put [] , which means the same

      for (let col = 0; col < cols; col++) {
        // For each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE; //place the grass patch
      }
    }
    return map;
  } //
  /**
   * DONE: welcomeMessage is a static method, displays a string
   * @param {*} msg - Is a string value to print a welcome message
   */
  static welcomeMessage(msg) {
    console.log(MSG_WELCOME);
  }

  // TODO: setHat positions the hat along a random x and y position within field array
  setHat() {
    const xHat = Math.floor(Math.random() * ROWS - 1) + 1; //+ 1 to not clash with hat at 0,0
    const yHat = Math.floor(Math.random() * COLS - 1) + 1; // -1 to ensure hat doesnt go outta field
    this.field[xHat][yHat] = HAT;
  }

  // TODO: printField displays the updated status of the field position
  printField() {
    this.field.forEach((row) => {
      console.log(row.join(""));
    });
  }

  updateMove(m) {
    if (m == UP) return console.log(MSG_UP);
    if (m == DOWN) return console.log(MSG_DOWN);
    if (m == LEFT) return console.log(MSG_LEFT);
    if (m == RIGHT) return console.log(MSG_RIGHT);
    if (m == QUIT) return console.log(MSG_QUIT);
    return console.log(MSG_INVALID);
  }

  updateGame(m = "") {
    //1.Capture the players currX and CurrY pos
    //2.When player moves, update field to show new pos of player, if grass ok.
    //3.check if player enters a hole, lose ==> Process Exit;
    //4.if player goes out of bound , lose => Process Exit;
    //5. If player reaches a hat,win. Show win! ==> Exit
  }
  //  TODO: start() a public method of the class to start the game
  start() {
    this.gamePlay = true; //start the game
    this.field[0][0] = PLAYER;
    this.setHat();
    this.printField();

    do {
      const input = prompt("\n(w)up, (s)down, (a) left,  (d) right, (q) exit:");
      this.printField();

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          break;
        case QUIT:
          this.updateMove(QUIT);

          break;
        default:
          break;
      }
      if (input == QUIT) process.exit(); //this.gamePlay = false; // Or process.exit()

      this.updateGame(input);
    } while (this.gamePlay);
  }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);
// Done: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);
const game = new Field(gameField);
game.start();
