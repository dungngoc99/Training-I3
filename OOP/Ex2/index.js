class Hero {
  constructor(health, mana) {
    this.health = health;
    this.mana = mana;
  }

  btnQ(heroTarget) {}
  btnW(heroTarget) {}
  btnE(heroTarget) {}
  btnR(heroTarget) {}
}
class HeroA extends Hero {
  constructor(health, mana) {}
  btnQ(heroTarget) {
    heroTarget.health -= 15;
    this.mana -= 2;
  }
  btnW(heroTarget) {
    this.health += 10;
    this.mana += 2;
  }
  btnE(heroTarget) {
    heroTarget.health += 30;
    this.mana -= 5;
  }
  btnR(heroTarget) {
    heroTarget.health -= 30;
    this.mana -= 5;
  }
}
class HeroB extends Hero {
  constructor(health, mana) {}
  btnQ() {}
}
const target = [];

const heroA = new HeroA(100, 20);
