//const Vehicle = require("./Vehicle.js");
import Vehicle from "./Vehicle.js"

class Car extends Vehicle{

    constructor(make, model, year){
        super(make, model, year);
        this.airbag = true;

    }

    //polymorphism
    drive(distance){
            super.travel(distance);
            console.log(`Driving complete Status : ${this.airbag ? 'Safety check passed.' : 'Airbag absent'}`);
    }
    
    checkSafetyFeature(){
        return this.airbag;

    }

    static welcomeStatement(msg){
        console.log(msg);
    

    }



}


const myNewCar = new Car("Honda", "Civic", 2024)
console.log(myNewCar);
console.log(myNewCar.travel(11));

console.log(`Does my new car have safety features: ${myNewCar.checkSafetyFeature()}`);



const mySecondNewCar = new Car("Volvo", "V40", "2016");
mySecondNewCar.travel(50);
console.log(`Car total distance: ${mySecondNewCar.getTotalDistance()}`);

console.log(Car.welcomeStatement("Hello CAR OWNER"))
//module.exports = Car;

export default Car;