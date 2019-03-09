/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 9 March 2019
; Modified By: Lea Trueworthy
; Description: The Factory pattern
;===========================================
*/ 

var header = require('/Users/leatrueworthy/bu-webdev/web-330/trueworthy-header')
console.log(header.display("Lea", "Trueworthy", "Assigment 3.2"))

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program with Postgres and MySql provided from the professor
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "o-s3cret";
    this.server = properties.server || "localhost:5454";
    this.version = properties.version || "10g"
}

function Informix(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "in-s3cret";
    this.server = properties.server || 'localhost:3030';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySql') {
        this.databaseClass = MySql;
    }

    if (properties.databaseType === 'Oracle') {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === 'Informix'){
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

// provided by the professor but NOT how it should look for the expected output
/*
console.log(oracle);
console.log(informix); 
*/

console.log("\nOracle {" + "\n" + "username: " + "'" + oracle.username +"'," + "\n" +
"password: " + "'" + oracle.password +"'," + "\n" + "server: " + "'" + oracle.server +"'," + "\n"
+ "version: " + "'" + oracle.version +"'" + "\n" + "}" + "\n");
console.log("Informix {" + "\n" + "username: " + "'" + informix.username +"'," + "\n" +
"password: " + "'" + informix.password +"'," + "\n" + "server: " + "'" + informix.server +"'" + "\n" + "}");

// end program