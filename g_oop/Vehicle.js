

class Vehicle {
    constructor(make, model, year){
        this.make = make; // Property to store the vehicle's make
        this.model = model; // Property to store the vehicle's model
        this.year = year; // Property to store the vehicle's year of launch / production
        this.distanceTraveled = 0; // Property to track the kilometers driven by the car
    }


    // Method common to all vehicles
    travel(distance) {
        this.distanceTraveled += distance;
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km).`);
    };

    // Method to get the total distance travelled
    getTotalDistance() {
        return this.distanceTraveled;
    };
}

// Creating a new instance of Vehicle
let myTransport = new Vehicle("Toyota", "Raize", 2022);

// Call the method travel() to update the distance of the instance of Vehicle by 100
myTransport.travel(100);
myTransport.travel(50);

console.log(`My transport has travelled a total of ${myTransport.getTotalDistance()} km. `);

// Call the method getTotalKilometersDriven to retrive the mileage of the instance of car
myTransport.getTotalDistance();


const myTransport2 = new Vehicle("hona", "Vexal", "2013", 50);
myTransport.travel(10);

//module.exports = Vehicle; // Export Class

export default Vehicle;