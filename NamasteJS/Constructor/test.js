//Ex 1
// Object Literal for creating objects
/*
let car = {
    name: "Maruti 800",
    topSpeed: 89
  };
  // we have already seen constructors like these:
  
  // Creating a constructor function for cars ProtoType >>

  function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    
    this.analyze = function() {
      console.log(
        `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
      );
    };
  }
  car1 = new GeneralCar("Nissan", 180);
  car2 = new GeneralCar("Marutu Alto", 80);
  car3 = new GeneralCar("Mercedes", 200);
  console.log(car1);
  console.log(car2);
  console.log(car3);
  
*/

  function myCar(model, year, whoB) {
    this.model = model;
    this.year = year;
  }
  
//   let a = 1,
//     b = 2,
//     c = 3;
  
//     let obj = {
//     a,
//     b,
//     c,
//   };
  
//   console.log(obj);
  
  let car = new myCar("Verna", 2020);
  
//   myCar.prototype.whoB = function (x) {
//     console.log(x);
//   };
  
  myCar.prototype.showName = showName.bind(car);
  
  function showName(name) {
    console.log(this.model + " " + name + " "+this.year);
  }
  
  car.showName("vishal");
  
  
   