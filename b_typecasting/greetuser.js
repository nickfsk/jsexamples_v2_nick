
// import prompt-sync 

const prompt =  require('prompt-sync')({sigint: true}); 


function greetUser(){
    let userName = prompt("What is your name");
    if (userName.trim()){
        console.log(`Welcome to FSD ${userName}`);
    }else{
        console.log("We did no receive your name");
    }
}

greetUser();