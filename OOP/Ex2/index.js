const targets = [];
class Hero {
  constructor(health, mana) {
    this.health = health;
    this.mana = mana;
    this.fullHealth = health;
    this.fullMana = mana;
  }
  btnQ() {}
  btnW() {}
  btnE() {}
  btnR() {}

  cast(skillName, targets) {
    let actionBySkill;
    if (this.mana - actionBySkill.mana > 0) {
      if (skillName == "Q") {
        actionBySkill = this.btnQ();
      }
      if (skillName == "W") {
        actionBySkill = this.btnW();
      }
      if (skillName == "E") {
        actionBySkill = this.btnE();
      }
      if (skillName == "") {
        actionBySkill = this.btnR();
      }
      this.mana -= actionBySkill.mana;
      actionBySkill.action(targets);
    }
  }
}

class HeroA extends Hero {
  constructor() {
    super(100, 20);
  }
  btnQ() {
    return {
      mana: 2,
      action: function (targets) {
        targets.forEach((target) => {
          target.health -= 15;
        });
      },
    };
  }
  btnW() {
    return {
      mana: 3,
      action: function () {
        if (this.health < this.fullHealth - 10) {
          this.health += 10;
        }
        if (this.health >= this.fullHealth - 10) {
          this.health = this.fullHealth;
        }
        if (this.mana < this.fullMana - 5) {
          this.mana += 5;
        }
        if (this.man >= this.fullMana - 5) {
          this.mana = this.fullMana;
        }
      },
    };
  }
  btnE() {
    return {
      mana: 5,
      action: function (targets) {
        if (targets.lenght > 0) {
          targets[0].health -= 30;
        }
      },
    };
  }
  btnR() {
    return {
      mana: 5,
      action: function (targets) {
        targets.forEach((target) => {
          target.health -= 30;
        });
      },
    };
  }
}

class HeroB extends Hero {
  constructor() {
    super(80, 20);
  }
  btnQ() {
    return {
      mana: 3,
      action: function (targets) {
        targets.forEach((target) => {
          target.health -= 20;
        });
      },
    };
  }
  btnW() {
    return {
      mana: 3,
      action: function (targets) {
        if (targets.lenght == 1) {
          targets[0].health -= 10;
        }
        if (targets.lenght >= 2) {
          targets[0].health -= 10;
          targets[1].health -= 10;
        }
      },
    };
  }
  btnE() {
    return {
      mana: 5,
      action: function () {
        if (this.health < this.fullHealth - 10) {
          this.health += 10;
        }
        if (this.health >= this.fullHealth - 10) {
          this.health = this.fullHealth;
        }
        if (this.mana < this.fullMana - 5) {
          this.mana += 5;
        }
        if (this.man >= this.fullMana - 5) {
          this.mana = this.fullMana;
        }
      },
    };
  }
  btnR() {
    return {
      mana: 0,
      action: function () {
        if (targets.lenght > 0) {
          if (targets.length > 0) {
            targets[0].health -= 50;
            this.mana = this.fullMana;
          }
        }
      },
    };
  }
}
