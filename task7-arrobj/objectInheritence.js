// Object Inheritance: Create a prototype for a 'Vehicle' object with properties like 'type', 'manufacturer', and 'model'. Extend this prototype to create two more specific types of vehicles, like 'Car' and 'Bike', adding specific properties or methods to them.

function Vehicle(type, manufacturer, model) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.model = model;
  }
  
  function Car(type, manufacturer, model, doors, seats) {
    Vehicle.call(this, type, manufacturer, model);
    this.doors = doors;
    this.seats = seats;
  }
  
  function Bike(type, manufacturer, model, gears) {
    Vehicle.call(this, type, manufacturer, model);
    this.gears = gears;
  }
  // inheritance
  Car.prototype = Object.create(Vehicle.prototype);
  Bike.prototype = Object.create(Vehicle.prototype);
  
//   car bike methods
  const car = new Car('Grandi', 'Toyota', 'RAV4', 4, 5);
  const bike = new Bike('Mountain', 'Trek', 'Fuel EX', 21);
  
  console.log(car);
  console.log(bike);
  
