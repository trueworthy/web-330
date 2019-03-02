var header = require('/Users/leatrueworthy/bu-webdev/web-340/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Assignment 2.2"));
console.log('\n');

/*
============================================
; Title:  Prototypes
; Author: Professor Krasso 
; Date:   2 March 2019
; Modified By: Lea Trueworthy
; Description: Assignment 2.2 Prototypes
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person = {

    getAge: function () {
    
    console.log(" The person's age is " + this.age + " years old.");
    
    }
    
    };
   
    //creating new object and extending the person object prototype
var leatrueworthy=Object.create(person,{
    "age":{
        "value":25,
    },
    "fullname":{
        "value":"Lea Trueworthy"
    }
 })
 
 console.log("This persons full name is", leatrueworthy.fullname)
 leatrueworthy.getAge();

// end program