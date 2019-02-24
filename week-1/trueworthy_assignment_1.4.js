var header = require('/Users/leatrueworthy/bu-webdev/web-330/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Exercise 1.4"));

/*
============================================
; Title:  Duck Typing
; Author: Professor Krasso 
; Date:   23 February 2019
; Modified By: Lea Trueworthy
; Description: Exercise 1.4 - Duck Typing, A.K.A "Interfaces"
;===========================================
*/ 

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!
 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>
*/

// start program

function Car(model)
{
    this.model = model;
}

Car.prototype.start = function() 
{
    console.log("Car added to the racetrack!");  
}

function truck(model, year) 
{
    this.model = model;
    this.year = year;
}

truck.prototype.start = function()  
{
    console.log("Truck added to the racetrack!"); 
}

function jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}

jeep.prototype.start = function()
{
    console.log("Jeep added to the racetrack!");
}

var racetrack = [];

function startIt(vehicle) 
{
    vehicle.start(); 
    racetrack.push(vehicle);  
}
 //creating vehicle information
var accord = new Car("Accord");
var ridge = new truck("Ridgeline", "2019");  
var gladiator = new jeep("Gladiator", "2020", "Firecraker Red"); 

console.log("");  //line-break
//call the startIt function to pass vehicle object
startIt(accord); 
startIt(ridge);  
startIt(gladiator); 

console.log('\n -- The following vehicles have been added to the racetrack --');
    for (var i = 0; i < racetrack.length; i++) 
    {
        console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
    }

    // end program