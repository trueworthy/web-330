var header = require('/Users/leatrueworthy/bu-webdev/web-330/trueworthy-header');
console.log(header.display("Lea", "Trueworthy", "Exercise 1.3"));


/*
============================================
; Title:  Class Refresher
; Author: Professor Krasso 
; Date:   20 January 2019
; Modified By: Lea Trueworthy
; Description: Exercise 1.3 - class refresher *ring ring*
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function Cellphone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;


//get
this.getPrice = function()
{
    return this.price;
}
this.getModel = function(){
    return this.model;
}

this.getDetails = function()
    {
        return "\nManufacturer:" + this.manufacturer + "\nModel:" + this.model + "\nColor: " + this.color + "\nPrice: " + "$" + this.getPrice();
    }
}

var cellphone = new Cellphone("Samsung", "Galaxy 9", "Lilac Purple", "699.99");
console.log(cellphone.getDetails());
// end program