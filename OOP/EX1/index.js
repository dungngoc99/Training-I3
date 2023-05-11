let calories = 0;
let eat = 0;
class Animal {
  constructor(name, age, spieces) {
    this.name = name;
    this.age = age;
    this.spieces = spieces;
  }
}

class Dog extends Animal {
  constructor(name, age, spieces, eat, speed) {
    super(name, age, spieces);
    this.calories = eat;
    this.speed = speed;
  }
  speed() {
    if ((this.spieces = "corgi")) {
      return 5;
    }
    if ((this.spieces = "chihuahua")) {
      return 6;
    }
  }
  realTimeRunning(time) {
    if (this.calories < time) {
      return this.calories;
    } else {
      return time;
    }
  }
  calcDistance(time) {
    if (this.age <= 40 && this.age >= 30) {
      this.speed -= 1;
      return this.speed * this.realTimeRunning(time);
    }
    if (this.age >= 41) {
      this.speed -= 2;
      return this.speed * this.realTimeRunning(time);
    } else {
      return this.speed * this.realTimeRunning(time);
    }
  }
}
class Human extends Animal {
  constructor(name, age, spieces, calories, eat, speed) {
    super(name, age, spieces);
    this.calories = calories;
    this.eat = eat;
    this.speed = speed;
  }
  speed() {
    if ((this.spieces = "asian")) {
      return 7;
    }
    if ((this.spieces = "african")) {
      return 10;
    }
  }

  realTimeRunning(time) {
    this.calories += this.eat;
    if (this.calories < time) {
      return this.calories;
    } else {
      return time;
    }
  }
  calcDistance(time) {
    if (this.age <= 40 && this.age >= 30) {
      this.speed -= 1;
      return this.speed * this.realTimeRunning(time);
    }
    if (this.age >= 41) {
      this.speed -= 2;
      return this.speed * this.realTimeRunning(time);
    } else {
      return this.speed * this.realTimeRunning(time);
    }
  }
}

let micky = new Dog("Micky", 20, "corgi", 10, 5);
let milu = new Dog("Milu", 35, "chihuahua", 10, 6);
let john = new Human("John", 15, "asian", 5, 5, 7);
let eto = new Human("Eto", 50, "african", 5, 5, 10);

let time = 10;

const arr = [micky, milu, john, eto];
let max = arr[0].calcDistance(time);
let max_index = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i].calcDistance(time)) {
    max = arr[i].calcDistance(time);
    max_index = i;
  }
}

console.log("Doi tuong chay nhanh nhat la:", arr[max_index].name);
