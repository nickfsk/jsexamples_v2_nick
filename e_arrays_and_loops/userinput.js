const prompt = require("prompt-sync")({sigint: true});

<<<<<<< HEAD
/* 
let getName = prompt("Please enter your name: ");

// 1. While loop
// If a condition is to be checked first, before running a while loop

while(getName === ""){                                  // Check first
    getName = prompt("Please enter your name: ");       // Do later
}

console.log(`Welcome, ${getName}`);   
*/


// 2. Do-while loop
// Since it is a must to obtain the user's name, do the executable block AT LEAST ONCE

/* 
let getName2 = "";

do {
    getName2 = prompt("Please enter your name: ");   // Do first
} while (getName2 === "");                           // Ask later

console.log(`Welcome, ${getName2}`);   
*/

// 3. Game input
=======
//let getName = prompt("what is your name ");

/*while ( getName === ""){
     getName = prompt("please enter your name: ");
}
  //if (getName)
        console.log(`Welcome, ${getName}`);*/

 /* let getName = "";

   do{
      getName = prompt("what is your name ");
   }while ( getName === "");

      console.log(`Welcome, ${getName}`);
*/


      // 3. Game input for assessment



>>>>>>> 2633e9b (added arrays and loops exercises)
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

let move = "";

function updateMove(m=""){
<<<<<<< HEAD
    if(m===UP) return console.log("You moved up.");            // Tell user he move up
    if(m===DOWN) return console.log("You moved down.");        // Tell user he move down
    if(m===LEFT)return console.log("You moved left.");         // Tell user he move left
    if(m===RIGHT)return console.log("You moved right.");       // Tell user he move right
    if(m===QUIT)return console.log("You quit the game!");      // Tell user he quit the game
    console.log("Invalid entry!");                             // Tell user he entered an invalid value
=======
     console.log(`The move is ${m}`);
    if (m===UP) return   console.log("You Moved UP");
    if (m===DOWN)return   console.log("You Moved Down");
    if (m===LEFT)return   console.log("You Moved LEFT");
    if (m===RIGHT)return   console.log("You Moved RIGHT")
    if ( m===QUIT) return console.log("you Quit");
    console.log(`${m}`);
    console.log("invalid");
 
>>>>>>> 2633e9b (added arrays and loops exercises)
}

do{
    move = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

<<<<<<< HEAD
    switch(move.toLowerCase()){
        case UP:
            updateMove(UP);
            break;
        case DOWN:
            updateMove(DOWN);
            break;
        case LEFT:
            updateMove(LEFT);
            break;
        case RIGHT:
            updateMove(RIGHT);
            break;
        case QUIT:
            updateMove(QUIT);
            break;
        default:
            updateMove();
    }
}while(move.toLowerCase() !== QUIT);

=======
    switch( move.toLowerCase()){
        case UP:
            //console.log("You Moved UP");
            updateMove("w");
            break;
        case DOWN:
             //console.log("You Moved DOWN");
             updateMove("s");
            break;
        case LEFT:
             //console.log("You Moved LEFT");
             updateMove("a");
            break;
        case RIGHT:
             //console.log("You Moved Right");
             updateMove("d");
            break;
        case QUIT:
             //console.log("You quit!"); 
             updateMove("q");
             break;   
        default:
             //console.log("Make a move"); 
             updateMove(move);

    }
}while( move !== "q");
>>>>>>> 2633e9b (added arrays and loops exercises)
