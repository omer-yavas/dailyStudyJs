/*
const arr = [5, 3, 9, 7];
const minMax = function (arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (min > arr[i]) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return [sum - max, sum - min];
};
console.log(minMax(arr));

let z = Map{ a: 2, b: 3, c: 4 };
const [t] = z;
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
  get speedUS() {
    return console.log(`${this.speed / 1.6} mi/h`);
  }
  set speedUS(speed) {
    this.speed = speed / 1.6;
  }
}

const ford = new CarCl('ford', 120);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
const tesla = new EV('tesla', 120, 23);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  return this;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.speed}
      km/h, with a charge of ${this.charge}%`);
  return this;
};

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`${this.make} going at ${this.speed}
        km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}
const rivi = new EVCl('Rivian', 120, 23);
