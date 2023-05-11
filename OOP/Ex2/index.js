const targets = [];
class Hero {
  constructor(health, mana) {
    this.health = health;
    this.mana = mana;
  }
  btnQ() {}
  btnW() {}
  btnE() {}
  btnR() {}
  cast() {}
}
class HeroA extends Hero {
  constructor(health, mana) {}
  btnQ() {
    targets.forEach((targets) => {
      targets.health -= 15;
    });
    this.mana -= 2;
  }
  btnW() {
    this.health += 10;
    this.mana += 2;
  }
  btnE() {
    targets[0].health -= 30;
    this.mana -= 5;
  }
  btnR() {
    targets.forEach((targets) => {
      targets.health -= 30;
    });
    this.mana -= 5;
  }
}
class HeroB extends Hero {
  constructor(health, mana) {
    let fullMana = this.mana;
  }
  btnQ() {
    targets.forEach((targets) => {
      targets.health -= 20;
    });
    this.mana -= 3;
  }
  btnW() {
    targets[0].health -= 10;
    this.mana -= 3;
  }
  btnE() {
    this.health += 20;
  }
  btnR() {
    targets[0].health -= 50;
    this.mana = fullMana;
  }
}
