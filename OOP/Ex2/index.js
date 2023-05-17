const targets = [];
class Hero {
  constructor(health, mana) {
    this.health = health;
    this.mana = mana;
    this.health = fullHealth;
    this.mana = fullMana;
  }
  btnQ() {}
  btnW() {}
  btnE() {}
  btnR() {}

  cast(skillName, targets) {
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
    if (skillName == "") {
      actionBySkill = this.btnR();
    }
    this.mana -= actionBySkill.mana;
    actionBySkill.action(targets);
  }
}

class HeroA extends Hero {
  constructor(health, mana) {}
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
        targets[0].health -= 30;
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
  constructor(health, mana) {}
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
        targets[0].health -= 10;
        targets[1].health -= 10;
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
        targets[0].health -= 50;
        this.mana = this.fullMana;
      },
    };
  }
}
