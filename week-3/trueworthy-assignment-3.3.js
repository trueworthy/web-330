/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 9 March 2019
; Modified By: Lea Trueworthy
; Description: Exercise 3.3 – The Singleton Pattern
;===========================================
*/ 

var header = require('/Users/leatrueworthy/bu-webdev/web-330/trueworthy-header')
console.log(header.display("Lea", "Trueworthy", "Assigment 3.2"))
console.log('\n')

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function() {
        if (!instance) {
            instance = createInstance();
    }
        return instance;
    }
    }
   })();

function databaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);

}

databaseSingletonTest();

// end program