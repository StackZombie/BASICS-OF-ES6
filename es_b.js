//  This tutorial is all about OOP and its paradigm
//Prior to ES6, JavaScript had no classes. To mimic a class, we often use a constructor function


// function Person(type){
//     this.type = type
// }

// Person.prototype.identify = function(){
//     console.log(this.type)
// }

// var me = new Person("human")
// me.identify()


//lets create a class according to ES6 syntax

class Person {

    // parameterize constructor
    constructor(type){
        this.type= type
    }
    // class methods ,Note that you don’t need to use the function keyword to declare a method of the class
    identity(){
        console.log(`I am ${this.type}`)
    }
}

let me = new Person("muggle")
me.identity();

//Singleton Class
// we can use the class expression to create singleton class by calling class instructor imediately
//use the new operator with the class expression
//use the paranthesis at the end of class to create singe instance

let movie = new class{
    constructor(name,genre){
        this.genre = genre
        this.name=name
    }
    play(){
        console.log(`${this.name} of genre ${this.genre} is being played `)
    }
}('Interstellar','Sci-Fi');

movie.play()

// henc this is the way of creating a singleton class
//GETTER and SETTER
//to create setter and getter function in a class we use get and set keyword 

class Car{
    constructor(){
    }

    //getter
    get details(){
        console.log(`${this.color} color car of model ${this.model} is manufactured by ${this.manufacturer}`)
    }

    // setters
    set details(details){
        
        this.color = details.split(',')[0]
        this.manufacturer = details.split(',')[1]
        this.model=details.split(',')[2]
    }
    set carColor(color){

        this.color=color
    }

    set carManufacturer(manufacturer){

        this.manufacturer=manufacturer
    }

    set carModel(model){

     this.model = model
    }
    get carColor(){

        return this.color
    }

    get carManufacturer(){

        return this.manufacturer
    }

    get carModel(){

        return this.model
    }
}

let car = new Car()
car.details="Red,Ferrari,2020"
car.details

car.carModel=2021
car.carColor='Blue'
console.log(car.carColor + "  " + car.carModel)

// hence the keyword for setter and getter are being used
// get and set but the function name must be same with different parameters and body
// a get will return the value and receive nothing
// set will receive a parameter and assign it to the class data member