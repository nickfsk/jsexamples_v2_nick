let pi = 3.142;
console.log(pi);


let strValue = "Hello";
console.log(strValue);


let boolValue = true;
console.log(boolValue);


let nullValue = null;
console.log(typeof nullValue );

let underfinedValue;
console.log(typeof undefined);

let arr = ["a", "b", "c"];
console.log(arr);
console.log(arr.length);


let faang = new Array();
faang[0]  = "Facebook";
faang[1] = "Amazon";
faang[2] = "Microsoft";
console.log(faang);
console.log(faang[0]);


let person = { name:"George", age:99};
console.log(person.name);
console.log(person.age);

let vehicle = new Object();
vehicle.name = "Suzuki";
vehicle.model = "Swift";

let announce = function(){console.log("Hello JS");};
announce();

let announce2 = () => {
    console.log("hello js again ");
}

announce2()



const PI = 3.14159;


function greet(){
    var greeting = " Welome FSD";
    console.log(localMsg);
}
//console.log(localMsg);


var nums = Number("");
console.log(nums);


console.log(Number("3.142"));
console.log(Math.PI);
console.log( Number("88 88"));
console.log(Number("Steve"));

var date = String(new Date());
console.log(date);

console.log(Boolean("1"));
console.log(Boolean("1"));
console.log(Boolean("0"));
console.log(Boolean("JOHN"));

function greetUser(){
    let userName = prompt("What is your name");
    if (userName.trim()){
        alert(`Welcome to FSD ${userName}`);
    }else{
        alert("We did no receive your name");
    }
}

greetUser();