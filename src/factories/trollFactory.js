
export const trollTypes = {
  forestTroll: {
      name: "Forest Troll",
      health: 150,
      damage: 20,
      canTalk: true,
      isDead: false,
  },
  mountainTroll: {
      name: "Mountain Troll",
      health: 200,
      damage: 30,
      canTalk: false,
      isDead: false,
  },
  swampTroll: {
      name: "Swamp Troll",
      health: 180,
      damage: 25,
      canTalk: true,
      isDead: false,
  }
};

export function createTroll(type) {
  
  const troll = { ...trollTypes[type] };
  
  troll.takeDamage = function(damage) {
      this.health -= damage;
      console.log(`${this.name} takes ${damage} damage!`);
      if (this.health <= 0) {
        console.log(`${this.name} has died!`);
          this.isDead = true;
      }
  };
  troll.attack = function() {
      console.log(`${this.name} attacks with ${this.damage} damage!`);
  };

  troll.checkIfDead = function() {
      return this.isDead ? `${this.name} is dead.` : `${this.name} is alive.`;
  };

  troll.speak = function() {
      if (this.canTalk) {
          console.log(`${this.name} says: "Grrr... I will crush you!"`);
      } else {
          console.log(`${this.name} remains silent.`);
      }
  };

  return troll;
}