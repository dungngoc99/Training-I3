class Animal {
  constructor(name, age, initialCalories) {
    this.name = name;
    this.age = age;
    this.calories = initialCalories;
    this.distance = 0;
  }
  speed() {
    return 0;
  }
  getCaloriesBurnt() {
    return 0;
  }
  getCaloriesPerEat() {
    return 0;
  }
  eat() {
    this.calories += this.getCaloriesPerEat();
  }
  run() {
    this.calories -= this.getCaloriesBurnt();
    if (this.calories > 0) {
      this.distance += this.speed();
    }
  }
}

class Dog extends Animal {
  constructor(name, age, type) {
    super(name, age, 0);
    this.type = type;
  }
  speed() {
    if (this.type == "corgi") {
      return 5;
    }
    if (this.type == "chihuahua") {
      return 6;
    }
  }
  getCaloriesBurnt() {
    if (this.type == "corgi") {
      return 5;
    }
    if (this.type == "chihuahua") {
      return 6;
    }
  }
  getCaloriesPerEat() {
    return 10;
  }
}
class Human extends Animal {
  constructor(name, age, type) {
    super(name, age, 5);
    this.type = type;
  }
  speed() {
    if (this.type == "Asian") {
      return 7;
    }
    if (this.type == "African") {
      return 10;
    }
  }
  getCaloriesBurnt() {
    if (this.type == "Asian") {
      return 7;
    }
    if (this.type == "African") {
      return 10;
    }
  }
  getCaloriesPerEat() {
    return 5;
  }
}

let micky = new Dog("Micky", 20, "corgi");
let milu = new Dog("Milu", 35, "chihuahua");
let john = new Human("John", 15, "asian");
let eto = new Human("Eto", 50, "african");

// const arr = [micky, milu, john, eto];
// let max = arr[0].run();
// let max_index = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i].run()) {
//     max = arr[i].run();
//     max_index = i;
//   }
// }

// console.log("Doi tuong chay nhanh nhat la:", arr[max_index].name);
