class Bike {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  //Inheritance
  class Model extends Bike {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
    
    get carname() {
        return this._carname;
      }
    set carname(x) {
        this._carname = x;
    }

    get model() {
      return this._model;
    }
    set model(x) {
      this._model = x;
  }    
  }
  
let myBike = new Model("KTM", "Duke 360");
console.log(myBike.show());


myBike.carname = "Yamaha"
console.log("the bike is a " + myBike.carname);

myBike.model = "MT-09"
console.log("The model of this bike is " + myBike.model)


console.log(myBike.show());
