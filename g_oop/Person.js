const person = {name: "Jon"};

console.log(person)


function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Steve", "Smith");


console.log(person1);
console.log(person1);



//Person.prototype.gender = "Male";
Person.prototype.gender = "Male";
Person.prototype.membership = "Basic";

console.log(person1.gender);
console.log(person2.gender);

console.log(person1.membership);
console.log(person2.membership);


Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;

}

Person.prototype.getPersonDetails = function(){
    return this.firstName + " " + this.lastName + " " + this.membership;

}

console.log(person1.getFullName() + " " + person1.membership);
console.log(person2.getFullName() + " " + person2.membership);

console.log(person1.getPersonDetails());



function animal(limbs, species){
    this.limb = limbs;
    this.species = species;
}

const iguana = new animal(4, "Lizard");

console.log("Iguana limbs: ", iguana.limb, "Iguana Species : ",  iguana.species);