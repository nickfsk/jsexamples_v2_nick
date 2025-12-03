<<<<<<< HEAD
// 1. Trim a string
let wordWithTrim = "   FSD   ";
=======
let wordWithTrim = "   FSM  ";

>>>>>>> 671164b (Update on expressions and strings)
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

<<<<<<< HEAD
// 2. toString (convert a number to a string)
let statusCode = 404;       // Number
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

// 3. TypeCast boolean data type to a string
let boolVal = true; 
console.log(typeof String(boolVal).toString());

// 4. Splitting a string
let fullName = "John Doe Smith";
let splitName = fullName.split(" ");
console.log(splitName.length); ["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. Spilt a string and obtain the string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);    // ["Hello", "World", "JS"]
=======

let statusCode = 404;

console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

let boolVal = true;
console.log(String(boolVal).toString());

// Spiltting a string

let fullName = "John Doe";
let splitName = fullName.split(" ");
//Returns and array of John and Doe
console.log(splitName);
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);


//Spilt a string and obtain the string by x elements 

let sentence = "Hello World JS codes";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);
>>>>>>> 671164b (Update on expressions and strings)

let splitWordIndex0 = splitInstances[0].split("");
console.log(splitWordIndex0);

<<<<<<< HEAD
// 6. Slidate the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);       // new instance of Date
let splitToday = today.toDateString();  // eee mmm dd yyyy
splitToday = splitToday.split(" ");     // ["Fri", "Nov", "28", "2025"]    
=======
const currDate = Date.now();
const today = new Date(currDate);
let splitToday = today.toDateString();
console.log(splitToday);
splitToday = splitToday.split(" ");

console.log(splitToday);

>>>>>>> 671164b (Update on expressions and strings)

let msg = "";

switch(splitToday[0]){
    case "Mon":
<<<<<<< HEAD
            msg = "Monday Blues";
            break;
    case "Tue":
    case "Wed":
    case "Thu":
            msg = "Work, work!";
            break;
    case "Fri":
            msg = "TGIF";
            break;
    default:
            msg = "Weekend is here";
}

console.log(msg);

=======
        msg = "monday sucks";
        break;
    case "Tue":
        msg = "Tue twins";
        break;
    case "Wed":
        msg = "Wed halfway there";
        break;

    case "Thu":
        msg = "One day to tgif";
        break;
    case "Fri":
        msg = "TGIF!"
        break;
    
    Default:
        msg = "weekend power off"

        


}
console.log(msg);
>>>>>>> 671164b (Update on expressions and strings)
