
// Object Literal for creating objects

let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function() {
    console.log("car is running");
  }
};
// we have already seen constructors like these:

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function() {
    console.log(`${this.name} Is Running`);
  };
  this.analyze = function() {
    console.log(
      `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);

// function myCar(model, year, whoB) {
//   this.model = model;
//   this.year = year;
// }
// let a = 1,
//   b = 2,
//   c = 3;
// let obj = {
//   a,
//   b,
//   c,
// };
// console.log(obj);

// let car = new myCar(1, 2);

// myCar.prototype.whoB = function (x) {
//   console.log(x);
// };

// myCar.prototype.showName = showName.bind(car);

// function showName(name) {
//   console.log(this.model + " " + name);
// }

// car.showName("vishhal");


 