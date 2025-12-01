// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
<<<<<<< HEAD
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray.length);
=======

const myArray = [ 1, 2, 3, 4, "hello", true, null];
console.log(myArray.length);

>>>>>>> 2633e9b (added arrays and loops exercises)

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
<<<<<<< HEAD
const mappedArray = [1, 2, 3, 4, 5, 6]; 

const multiplyArrBy10 = mappedArray.map(item => item * 10); /* Short-hand of the arrow function */
console.log(multiplyArrBy10);
=======
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyArrBy10 = mappedArray.map(item => item * 10);


const multiplyArrby20 = mappedArray.map((item) => {
    return item * 20;
})


console.log(multiplyArrBy10);


const vowels = ["a", "e", "i", "o"];
const filteredVolwels = vowels.filter( vowel => vowel === "a" || vowel === "u");
console.log(filteredVolwels );


const fw = vowels.filter((vowel) => {
    return  vowel === "a" || vowel === "u" 
});
console.log(fw);
>>>>>>> 2633e9b (added arrays and loops exercises)

// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];

// ? re-write the example below using an arrow function (long-form)
const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
<<<<<<< HEAD
const nums =  [1, 3, 2, 5, 4, 6]; 
const names = ["James", "Chris", "Max", "Lenon"];
=======
const nums = [1, 6, 2, 4, 5, 52, 49];
const names = ["James", "Chris", "Zee", "Lenon"];

const descendNums =   nums.sort((a, b) => a > b ? -1 : 1 );
console.log(descendNums);

const ascendNums = nums.sort((a, b) => a > b ? 1 : -1);
console.log(ascendNums);


const descendNames = names.sort((a, b) => a > b ? -1 :1 );
console.log(descendNames);


//const ascendNames = names.sort((a, b) => a > b ? 1 : -1 );
//console.log(ascendNames);

//const ascendNames = names.sort();
//console.log(ascendNames);

const numbers = new Array(1,2, 3, 4);
const product_of_arr =  numbers.reduceRight((a, b) => a * b);
console.log(product_of_arr);



>>>>>>> 2633e9b (added arrays and loops exercises)

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1 );
console.log("descendNums", descendNums);

const ascendNums = nums.sort((a, b) => a > b ? 1 : -1 ); /* num.sort() acheives the same: ascending sort */
console.log("ascendNums", ascendNums);

// Sort by descending order
// Implement your code here
const descendNames = names.sort((a, b) => a > b ? -1 : 1 );
console.log(descendNames);

const ascendNames = names.sort();   /* By default, array.sort() sorts in ascending order */
console.log(ascendNames);



// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const product_of_arr = numbers.reduce((a, b) => a * b);     // 24
console.log(product_of_arr);

// another approach of applying a reduce function of an array
// Implement your code here
const arr = new Array(2, 3, 4, 5);

<<<<<<< HEAD
function product(a, b){
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an EXISTING array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];   // 0 - 3
teamList.push("Muhaimin");                                  // 0 - 4
console.log(teamList.length);
console.log(teamList);

// remove the last element of an EXISTING array
teamList.pop();                                             // intrinsically known to remove lst element
console.log(teamList.length);                               // 0 - 3 
console.log(teamList);                                      // 4 names

// shift and unshift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());                                  // FB removed
console.log(mag7);                                          // AMZN, AAPL, NFLX, GOOG

// Unshift (prepend META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// splice data (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];             // 0 - 2
const index = 2;
const newPlayer = "Steve Carr";  
bballTeam.splice(index, 0, newPlayer);                      // ["Jordan", "Pippen", "Steve Carr", "Bill"]                           
console.log(bballTeam);

bballTeam.splice(bballTeam.length - 1, 1, "Rodman");        // Replace "Bill" with "Rodman" 
console.log(bballTeam);
=======
const arr = new Array(1, 2, 5, 4 );

function product(a,b){
    return a * b;

}

const resultOfProduct = arr.reduce(product);
console.log("Reduce func " + resultOfProduct);



const teamlist = ["Tanna", "Sha", "zee","bon"]
console.log(teamlist.length);
teamlist.push("joker");
console.log(teamlist);
//teamlist.pop();
console.log(teamlist);

//Shift and unshift


const mag7  = ["fb", "amzn", "goog", "aapl", "msft"];
console.log(mag7.shift());
console.log(mag7);

mag7.unshift("meta", "Nvda");
console.log(mag7);


// Splicing
const bballTeam = ["jordan", "pippen", "bill"];
const index = 2;
console.log(bballTeam);
const newPlayer = "steve carr";
bballTeam.splice(index, 0, newPlayer);
console.log(bballTeam);

bballTeam.splice(3, 1, "rod");
console.log(bballTeam);





//

>>>>>>> 2633e9b (added arrays and loops exercises)

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here

<<<<<<< HEAD
// Do a count up (1 - 10)
const max = 10;
for (let index = 1; index <= max; index++) {
   console.log(index);
}

// change the index, the condition and the step (variables that can change)
const max100 = 100;
for (let index = 10; index <= max100 ; index = index + 10) {
    console.log(index);                                         // 10, 20, 30, 40, 50 ... 100
}

// count down (10 - 1); TERNARY operation
for (let index = max; index >= 0 ; index--) {
    // if(condition) ? execute if condition block : else block (ternary operation)
    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}

=======
const max = 10;
for(let index = 1; index <= max; index++){
    console.log(index)
}


const max100 = 100;
for(let index = 10; index < max100; index = index + 10){
    console.log(index)
}


const max10 = 10;
for(let index = 10; index >= 0; index--){
   console.log( ( index == 1 ) ? ("Merry xmas") : index );
   // (console.log("Merry xmas"))
//else
  //  console.log(index)
}


const tickerSymbols = ["meta", "amzn", "goog", "msft"];

//for ( let index = 0; index < tickerSymbols.length; index++)
tickerSymbols.forEach(element => {console.log(element)});


for(let index = 10; index < tickerSymbols.length;  index++){
   console.log(`${index + 1 }, ${tickerSymbols[index]}` );

}

tickerSymbols.forEach((element, index) => {console.log(`${index + 1}. ${element}`)});

>>>>>>> 2633e9b (added arrays and loops exercises)

// ii - for-each loop
// Implement your code here
const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => { console.log(`${index + 1}. ${element}`) });

// iii - do-while loop (do first, check later)
// Implement your code here
// let i = 0;

<<<<<<< HEAD
do {
    console.log(i); // print 0 to 10
    i++;
} while (i <= 5);
=======
let i=1;
>>>>>>> 2633e9b (added arrays and loops exercises)

do{
    console.log(i);
    i++;
} while(i <= 10 )



let j = 0;
while ( j <= 10){
    console.log(j);
    j++
}
// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

<<<<<<< HEAD
let j = 0;
while (j <= 10) {
    console.log(j); // print 0 to 10
    j++;
}
=======
const sleep = async(delay) => new Promise((resolve) => setTimeout(() =>{
    console.log("i am sleeping");
    return resolve();
}, delay));

await sleep(2000);

setTimeout(() => {
    console.log("I've been waiting for 2 sec");

}, 2000);
>>>>>>> 2633e9b (added arrays and loops exercises)
