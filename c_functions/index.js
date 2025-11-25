
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/

//const prompt =  require('prompt-sync')({sigint: true}); 
function ftnSalutation(){

  const msg = "Hi, " + salutation + " " + user;

  return msg;
  //  implement your statement(s) here
}
const ftnGreeting = (salutation, user) => {
    //  implement your statement(s) here

    const msg = `Hi , ${salutation} ${user}`;
    return msg
}


//const result = ftnGreeting("Mr" , "Jones");

console.log(ftnGreeting("Mr" , "Jones"));

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/


function ftnAdd(a =0, b=0){
  const result = a+ b;
  return result;
}

const sum = ftnAdd(10, 5)
console.log(sum);

const anothersum = ftnAdd();
console.log(anothersum);

const anotherftnGreeting = (salutation = "",name = "") => {

  if(salutation.length == 0 && name.length == 0)
    return "Enter name & Greeting";


  return `Hello,  ${salutation} ${name}. Welcome to the bootcamp.`;
};

console.log(anotherftnGreeting("Master", "Nick"));

console.log(anotherftnGreeting());

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/