<<<<<<< HEAD
// Example of a 2D array
const array2D =[
    [3, 2, 7],  // row 1
    [2, 9, 5],  // row 2
    [5, 1, 5],  // row 3
];

console.log(array2D)

// Assessing the elements of an array
// array_name[row][col]

// Printing all the columns in the first row
const e1 = array2D[0][0];  /* index row 0, index col 0: Ans: 3 */ 
const e2 = array2D[0][1];  /* index row 0, index col 1: Ans: 2 */
const e3 = array2D[0][2];  /* index row 0, index col 2: Ans: 7 */  

console.log(e1, e2, e3);

// Printing all the columns in the second row
const e4 = array2D[1][0];  /* index row 1, index col 0: Ans: 2 */ 
const e5 = array2D[1][1];  /* index row 1, index col 1: Ans: 9 */
const e6 = array2D[1][2];  /* index row 1, index col 2: Ans: 5 */  

console.log(e4, e5, e6);

// Printing all the columns in the third row
const e7 = array2D[2][0];  /* index row 2, index col 0: Ans: 5 */ 
const e8 = array2D[2][1];  /* index row 2, index col 1: Ans: 1 */
const e9 = array2D[2][2];  /* index row 2, index col 2: Ans: 5 */  
=======
const array2D = [
    [3, 2, 7],
    [2, 9, 5],
    [5, 1, 5]
];


//const another2Darr = new Array[
   // [3, 2, 7],
   // [2, 9, 5],
  //  [5, 1, 5]
//];


console.log(array2D);
// i want to access 9, hence  X=1, Y=1
console.log(array2D[1][1]);

const e1 = array2D[0][0];
const e2 = array2D[1][0];
const e3 = array2D[0][1];


console.log(e1, e2, e3);

//Print all cols in first row


const e4 = array2D[0][0];
const e5 = array2D[0][1];
const e6 = array2D[0][2];

console.log(e4, e5, e6);

//valaues in 3rd row
const e7 = array2D[2][0];
const e8 = array2D[2][1];
const e9 = array2D[2][2];
>>>>>>> 2633e9b (added arrays and loops exercises)

console.log(e7, e8, e9);

const myField = [
  ['░', '░', 'O', '░'],
  ['*', 'O', '░', 'O'],
<<<<<<< HEAD
  ['░', '^', '░', '░'],
=======
  ['░', '^', '░', '░']
>>>>>>> 2633e9b (added arrays and loops exercises)
];

console.log(myField);

<<<<<<< HEAD
// i referred to as the row
// j referred to as the column

// Dynamic 2D array
const rows = 3; 
const cols = 3;
const arr2D = [];   // arr2D is a new instance of an Array object

// Nested for-loop (loop inside a loop)

// 1. Manages per row
for (let i = 0; i < rows; i++) {

    arr2D[i] = [];  // create a new instance of an Array (as the row)
    
    // 2. Manages the columns per row
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = '░';    // populate each row and its column with a value of '░'
    }

}

console.log(arr2D);
=======
//
const rows = 3;
const cols = 3;

const arr2D = []; // new instance of an array

// i is rows, j is columns
// Manage rows
for ( let i =0; i < rows; i++){
    arr2D[i]  = []; // create the new instance of array as a row

    //Manages columns    
    for (let j = 0; j < cols; j++){
       arr2D[i][j] = '░';

       // copy initial array to this array
       //  arr2D[i][j] = array2D[i][j];
    }
}

console.log(arr2D);
arr2D.forEach(element => {console.log(element)});
>>>>>>> 2633e9b (added arrays and loops exercises)
