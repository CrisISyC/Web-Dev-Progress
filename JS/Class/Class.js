class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

var MyCar = new Car("Volvo", 2016);

console.log(MyCar);
console.log(MyCar.name);
console.log("The age of the car is " + MyCar.age());
