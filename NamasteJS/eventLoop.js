console.log("First Function");

setTimeout(function (){
    console.log("Second Function");
},5000);

console.log("Third Function");


//call apply bind

const kitchen = {
    name: "kitchen",
    purpose: "cook",
    order: "meal",

    cookFood() {
      console.log(`Serving ${this.order} in 2 mins`);
    },
  };





  const bedroom = {
    name: "bedroom",
    purpose: "sleep",
    order: "magiee",
   
  };

  kitchen.cookFood.call(bedroom);
