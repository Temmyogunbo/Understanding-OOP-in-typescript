
/**
 * @class Vehicle
 * 
 */
class Vehicle  {

  // Encapsulation
  private soldOn;
  private speed;
  private manufactureDate;
  private wheels;
  private type;

/**
 * It initialize the Vehicle object
 *
 * @author Emmanuel Ogunbo
 *
 * @param {soldOn} string
 * @param {speed} number
 * @param {wheels} number
 * @param {type} string
 * @param {manufactureDate} string
 *
 */
  constructor(speed: number, wheels: number, type: string, manufactureDate: string, soldOn?: string) {
    this.soldOn = soldOn;
    this.speed = speed;
    this.wheels = wheels;
    this.manufactureDate = manufactureDate;
    this.type = type;
  }

/**
 * It tells the user about the vehicle he is driving
 *
 * @author Emmanuel Ogunbo
 *
 * @param {wheels} number
 *
 * @returns {string} 
 *
 */
  public drive();

  public drive(wheels?: number) {
    if (wheels > 0) {
      return `Your vehicle is ${wheels} wheel drive and manufactured in the year ${this.manufactureDate}`;
    }
    return `You are driving a ${this.manufactureDate} at a speed of ${this.speed} km/hr`;
  }

/**
 * It returns the sale price of the vehicle if it is not sold
 *
 * @author Emmanuel Ogunbo
 *
 * @param {void}
 *
 * @returns {string}
 *
 */
  public salePrice() {
    if (this.soldOn !== '') {
      return ' This vehicle has been sold';
    } else {
      return `This vehicle cost ` + 1000.0 * this.wheels + ` dollars`;
    };
  }

}

/**
 * @class Truck inherits properties and methods from Vehicle
 * 
 * @extends Vehicle
 */
class Truck extends Vehicle {
  
  /**
 * THis metod override the paren class method and implements its own. Polymorphism
 *
 * @author Emmanuel Ogunbo
 *
 * @param {void} 
 *
 * @returns {string}
 *
 */
public drive() {
  super.drive();
return `Your truck is programmed to move faster than your can imagine`;
}
}
const fordRanger = new Truck(50, 8, 'ford', new Date().toLocaleString(), '2017')

// The drive method is being called but the implementation has been abstacted from the user
console.log(fordRanger.drive());
