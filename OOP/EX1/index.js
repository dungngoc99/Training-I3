let time;
class Animal {
  constructor(name, age, initialCalories) {
    this.name = name;
    this.age = age;
    this.calories = initialCalories;
    this.distance = 0;
  }
  speed() {}
  getCaloriesBurnt() {}
  eat() {}
  run() {
    let runTime = 0;
    this.calories += this.eat();
    while (this.calories > 0 && runTime < time) {
      runTime += 1;
      this.calories -= this.getCaloriesBurnt();
    }
    return (this.distance += runTime * this.speed());
  }
}

class Dog extends Animal {
  constructor(name, age, type) {
    super(name, age, 0);
    this.type = type;
  }
  speed() {
    if ((this.type = "corgi")) {
      return 5;
    }
    if ((this.type = "chihuahua")) {
      return 6;
    }
  }
  getCaloriesBurnt() {
    if ((this.type = "corgi")) {
      return 5;
    }
    if ((this.type = "chihuahua")) {
      return 6;
    }
  }
  eat() {
    return 10;
  }
}
class Human extends Animal {
  constructor(name, age, type) {
    super(name, age, 5);
    this.type = type;
  }
  speed() {
    if ((this.type = "Asian")) {
      return 7;
    }
    if ((this.type = "African")) {
      return 10;
    }
  }
  getCaloriesBurnt() {
    if ((this.type = "Asian")) {
      return 7;
    }
    if ((this.type = "African")) {
      return 10;
    }
  }
  eat() {
    return 5;
  }
}

let micky = new Dog("Micky", 20, "corgi", 10, 5);
let milu = new Dog("Milu", 35, "chihuahua", 10, 6);
let john = new Human("John", 15, "asian", 5, 5, 7);
let eto = new Human("Eto", 50, "african", 5, 5, 10);

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
