/**
* index.js - Arrays and Objects
* Author:    Jing Li
* Created:   05.02.2023
**/

// Define Variables
myTransport = ["Car", "Bus", "Train", "VTA"];

//Create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Camry SE",
  color: "Parisian night pearl",
  year: 2016,
  age: function(){
    return 2023 - this. year;
  }
}

//Output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

