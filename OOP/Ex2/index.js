const targets = [];
const len = targets.length;
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
    if (this.mana - actionBySkill.mana > 0) {
      let actionBySkill;
      if (skillName == "Q") {
        actionBySkill = this.btnQ();
      }
      if (skillName == "W") {
        actionBySkill = this.btnW();
      }
      if (skillName == "E") {
        actionBySkill = this.btnE();
      }
      if (skillName == "R") {
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
        this.health = Math.min(this.health + 10, this.fullHealth);
        this.mana = Math.min(this.mana + 5, this.fullMana);
      },
    };
  }
  btnE() {
    return {
      mana: 5,
      action: function (targets) {
        if (len > 0) {
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
        if (len >= 1) {
          targets[0].health -= 10;
          if (len >= 2) {
            targets[1].health -= 10;
          }
        }
      },
    };
  }
  btnE() {
    return {
      mana: 5,
      action: function () {
        this.health = Math.min(this.health + 20, this.fullHealth);
        this.mana = Math.min(this.mana + 5, this.fullMana);
      },
    };
  }
  btnR() {
    return {
      mana: 0,
      action: function () {
        if (len > 0) {
          targets[0].health -= 50;
          this.mana = this.fullMana;
        }
      },
    };
  }
}
