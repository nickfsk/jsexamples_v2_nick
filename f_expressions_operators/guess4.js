<<<<<<< HEAD
// Reference: https://stackoverflow.com/questions/11980087/javascript-words-to-numbers

const ans = 88;                                             // actual answer

const feedbackGuess = "Guess the number.";                  // ask the user to guess a number
const feedbackQuit = "Press q or Q to quit.";               // allow the user to quit
const feedbackCorrect = "Your answer is correct.";          // display when answer is correct
const feedbackWrong = "Your answer is wrong.";              // display when answer is wrong
const feedbackTooHigh = "Lower number please. Try again.";  // display if number is too high
const feedbackTooLow = "Higher number please. Try again.";  // display if number is too low 
const feedbackEmpty = "Your answer is empty."               // display if the number is empty

let userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {

    let correctAns = false;                                                         // flag (instantiated as false)
    let feedback = "";                                                              // message placeholder (instantiated as empty string "")                                   

    switch (true) {
        case (Number(userInput) === ans || text2num(userInput) === ans):            // answer is correct
            correctAns = true;
            feedback = feedbackCorrect;
            break;
        case (!userInput):                                                          // answer is empty (boolean of an empty string === false, when !false === true)
            correctAns = false;
            feedback = feedbackEmpty;
            break;
        case (Number(userInput) > ans || text2num(userInput) > ans):                // answer is too high
            correctAns = false;
            feedback = feedbackTooHigh;
            break;
        case (Number(userInput) < ans || text2num(userInput) < ans):                // answer is too low
            correctAns = false;
            feedback = feedbackTooLow;
            break;
        default:
            correctAns = false;
            feedback = feedbackWrong;                         
    }
    
    alert(feedback);                                                                // give the user the needed feedback first
    
    if(correctAns){                                                                 // If answer is correct
        break;                                                                      // end the trivia
    }

    // Otherwise (answer is wrong), continue to ask for input.
    userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();
}
=======
// Import and use package parse from number-from-words
import {parse} from "numbers-from-words";

const ans = 10;
const ansString = "ten";

const feedbackGuess = "Guess the number.";
const feedbackCorrect = "You are correct!!";
const feedbackQuit = " (Press q or Q to quit)";
const feedbackEmpty = "Your answer is empty. Please try again." + feedbackQuit; 
const feedbackTooHigh = "Your answer is too high! Try again."; + feedbackQuit;
const feedbackTooLow = "Your answer is too low! Try again." + feedbackQuit;
const feedbackWrong =  "Wrong answer. Guess again." + feedbackQuit;


 
const answerLookup = {                                      // answer lookup table
    "one" : 1,
    "two": 2,
    "three": 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "forteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
};
 
 

// Additional references: converting if-else chain to switch case statements
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than

let userInput = prompt(feedbackGuess + feedbackQuit);



function evaluateStringAnswer(userInput){

    //evaluatedString = parse(userInput);
    return answerLookup[userInput] === ans;
}

while(userInput.toUpperCase() !== "Q"){ // as long as the user doesn't enter 'q' AND 'Q', run the loop
    
    let correctAns = false;
    let userFeedback = "";

    switch (true) {

        case (userInput == ans || evaluateStringAnswer(userInput)):
            userFeedback = feedbackCorrect;
            correctAns = true;
            break;   

        case (userInput.toLowerCase() == ansString):
            userFeedback = feedbackCorrect;
            correctAns = true;
            break;

        case (!userInput):
            userFeedback = feedbackEmpty;
            correctAns = false;   
            break;  

        case (userInput > ans):
            userFeedback = feedbackTooHigh;
            correctAns = false;
            break;

        case (userInput < ans):
            userFeedback = feedbackTooLow;
            correctAns = false;
            break;
        
        default:
            userFeedback = feedbackWrong;
            console.log("from default " + typeof userInput);
            correctAns = false;
            break;
    }

    if(correctAns){
        alert(userFeedback);
        break;
    }
    else{
        userInput = prompt(userFeedback);
    }

}


// let ans = 10;

// const feedbackGuess = "Guess the number.";
// const feedbackQuit = "Press q or Q to quit.";

// const feedbackCorrect = "Your answer is correct!";
// const feedbackWrong = "Your answer is wrong!";
// const feedbackTooHigh = "Lower number please, Try again";
// const feedbackTooLow = "Higher number please, try again";
// const feedbackEmpty = "Your answer is empty!"

// let userInput = prompt(feedbackGuess.concat(" ",  feedbackQuit)).toLowerCase();



// while(userInput != 'q'){ // as long as the user doesn't enter 'q' AND 'Q', run the loop

//     let correctAns = false; //Flag
//     let feedback = "";  //msg placeholder as empty string

//     switch(true){
//            case (Number(userInput) === ans):
//             feedback = feedbackCorrect;
//             correctAns = true;
//             break;   

//         case (!userInput):
//             feedback = feedbackEmpty;
//             correctAns = false;
//             break;

//         case (Number(userInput) > ans):
//             feedback = feedbackTooHigh;
//             correctAns = false;
//             break;

//         case (Number(userInput) < ans):
//             feedback = feedbackTooLow;
//             correctAns = false;
//             break;

//         default:
//             feedback = feedbackWrong;
//             correctAns = false;
//     }

//     //Prep the feeback to the user 
//        if(correctAns){
//         alert(userFeedback);
//         break;
//     }



//     userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();

//  }






>>>>>>> 671164b (Update on expressions and strings)
