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
  realTimeRunning(x) {
    if (this.calories() <= x) {
      return this.calories();
    } else {
      return x;
    }
  }
  calcDistance(x) {
    if (this.age <= 40 && this.age >= 30) {
      this.speed -= 1;
      return this.speed * this.realTimeRunning(x);
    }
    if (this.age >= 41) {
      this.speed -= 2;
      return this.speed * this.realTimeRunning(x);
    } else {
      return this.speed * this.realTimeRunning(x);
    }
  }
}
let micky = new Animal("dog", "Micky", "corgi", 20, 5, 0, 10);
let milu = new Animal("dog", "Milu", "chihuahua", 35, 6, 0, 10);
let john = new Animal("human", "John", "asian", 20, 7, 5, 5);
let eto = new Animal("human", "Eto", "african", 50, 10, 5, 5);

let time = 10;

console.log(micky.calcDistance(time));
console.log(milu.calcDistance(time));
console.log(john.calcDistance(time));
console.log(eto.calcDistance(time));

let arr = [micky, milu, john, eto];
let max = arr[0].calcDistance(time);
let max_index = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i].calcDistance(time)) {
    max = arr[i].calcDistance(time);
    max_index = i;
  }
}
console.log(max);
console.log(max_index);
console.log("Doi tuong chay nhanh nhat la:", arr[max_index].name);
