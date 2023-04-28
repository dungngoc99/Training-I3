function Animal(spiece, name, classify, age, speed) {
  this.spiece = spiece;
  this.name = name;
  this.classify = classify;
  this.age = age;
  this.speed = speed;
}

Animal.prototype.calcDistance = function () {
  let dis = 0;

  if (this.age <= 40 && this.age >= 30) {
    this.speed -= 1;
    return (dis += this.speed * 10);
  }
  if (this.age >= 41) {
    this.speed -= 2;
    return (dis += this.speed * 10);
  } else {
    return (dis += this.speed * 10);
  }
};

let micky = new Animal("dog", "Micky", "corgi", 20, 5);
let milu = new Animal("dog", "Milu", "chihuahua", 35, 6);
let john = new Animal("human", "John", "asian", 20, 7);
let eto = new Animal("human", "Eto", "african", 50, 10);

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
