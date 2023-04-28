class Animal {
  constructor(spiece, name, classify, age, speed, calo, eat) {
    this.spiece = spiece;
    this.name = name;
    this.classify = classify;
    this.age = age;
    this.speed = speed;
    this.calo = calo;
    this.eat = eat;
  }
  calories() {
    return this.calo + this.eat;
  }
  realTimeRunning() {
    if (this.calories() <= 10) {
      return this.calories();
    } else {
      return 10;
    }
  }
  calcDistance() {
    if (this.age <= 40 && this.age >= 30) {
      this.speed -= 1;
      return this.speed * this.realTimeRunning();
    }
    if (this.age >= 41) {
      this.speed -= 2;
      return this.speed * this.realTimeRunning();
    } else {
      return this.speed * this.realTimeRunning();
    }
  }
}
let micky = new Animal("dog", "Micky", "corgi", 20, 5, 0, 10);
let milu = new Animal("dog", "Milu", "chihuahua", 35, 6, 0, 10);
let john = new Animal("human", "John", "asian", 20, 7, 5, 5);
let eto = new Animal("human", "Eto", "african", 50, 10, 5, 5);

let arr = [micky, milu, john, eto];
let max = arr[0].calcDistance();
let max_index = 0;
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i].calcDistance()) {
    max = arr[i].calcDistance();
    max_index = i;
  }
}
console.log("Doi tuong chay nhanh nhat la:", arr[max_index].name);
