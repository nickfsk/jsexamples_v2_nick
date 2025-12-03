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

// Done: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 15;
const COLS = 15;
const PERCENT = 0.2; // Percentage of randomness
//const player = require('play - sound')((opts = {}));

//let audio = new Audio('finish.wav');

class Field {
  /**
   *  Done: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
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
      map[row] = new Array(); // or can assign [] , which means the same

      for (let col = 0; col < cols; col++) {
        // For each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE; //place the grass patch
      }
    }

    //Ensure [0][0] is a patch of grass, as the initial start of player is [0][0]
    map[0][0] = GRASS;

    // Ensure at least one of the adjacent positions ([0][1] or [1][0]) is GRASS for first move
    //added 2 dec: Ensure player has at least one valid move at start so that player
    //isnt surrounded by holes, change either one if both are holes.

    if (map[0][1] === HOLE && map[1][0] === HOLE) {
      // Randomly choose one to change to GRASS
      const changeRight = Math.random() > 0.5;

      if (changeRight) {
        map[0][1] = GRASS;
      } else {
        map[1][0] = GRASS;
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

  // Done: setHat positions the hat along a random x and y position within field array
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
    // STEP 1: Get the player's current position
    const { x: currX, y: currY } = this.playerPosition;
    let newX = currX;
    let newY = currY;

    // STEP 2: Calculate the new position based on the move
    switch (m.toLowerCase()) {
      case UP:
        newX--;
        break;
      case DOWN:
        newX++;
        break;
      case LEFT:
        newY--;
        break;
      case RIGHT:
        newY++;
        break;
      default:
        // If it's not a valid move, do nothing
        return;
    }

    // STEP 3: Check if the new position is within the boundaries
    if (newX < 0 || newX >= ROWS || newY < 0 || newY >= COLS) {
      //Sound
      const player = require("play-sound")();

      player.play("finish.wav", (err) => {
        if (err) {
          console.error("Error playing sound:", err);
        } else {
          console.log("Sound played successfully!");
        }
      });
      //
      console.log(OUT);
      process.exit();
      //return; // Don't move if out of bounds
    }

    //if the player walks into a hole
    if (this.field[newX][newY] === HOLE) {
      //sound
      const player = require("play-sound")();

      player.play("finish.wav", (err) => {
        if (err) {
          console.error("Error playing sound:", err);
        } else {
          console.log("Sound played successfully!");
        }
      });
      //
      console.log(LOSE);
      process.exit();
    }

    // If player lands on a hat, win
    if (this.field[newX][newY] == HAT) {
      //audio.play();
      const player = require("play-sound")();

      player.play("inter.wav", (err) => {
        if (err) {
          console.error("Error playing sound:", err);
        } else {
          console.log("Sound played successfully!");
        }
      });
      //end play sound
      console.log(WIN);
      process.exit();
    }

    // STEP 4: Update the field array
    // First, clear the player's old position (replace with grass)
    this.field[currX][currY] = GRASS;

    // Then, place the player at the new position
    this.field[newX][newY] = PLAYER;

    // STEP 5: Update the stored player position
    this.playerPosition = { x: newX, y: newY };
  }

  //  TODO: start() a public method of the class to start the game
  start() {
    this.gamePlay = true; //start the game
    this.field[0][0] = PLAYER;
    this.setHat();
    this.printField();
    //Start music
    const player = require("play-sound")();
 
      player.play("begin.wav", (err) => {
        if (err) {
          console.error("Error playing sound:", err);
        } else {
          console.log("Sound played successfully!");
        }
      });

    //End start Music
    do {
      const input = prompt("\n(w)up, (s)down, (a) left,  (d) right, (q) exit:");

      // Handle the quit command
      if (input.toLowerCase() === QUIT) {
        console.log(MSG_QUIT);
        // this.gamePlay = false;
        // break;
        process.exit();
      }

      // Update the move (shows the move message)
      this.updateMove(input);

      // Update the game state (moves the player)
      this.updateGame(input);

      // Print the updated field after the move
      console.log("\n"); // Add a blank line for readability
      this.printField();
    } while (this.gamePlay);
  }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);
// Done: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);
const game = new Field(gameField);
game.start();
