/*
in which we define strategies for the different spell types, and preferably give each an apply method. 
One way to do this is by defining an object for the strategy and in that creates the apply function.

the apply function is where the magic happens (see what I did there?). Your destructive magic
 could possibly harm or kill the troll, so it could be great if the trolls health would be updated. 
 One way to solve this is by passing an update method to the apply method.
*/

export const spellStrategies = {
  "charm": {
    apply: (spell) => {
      console.log('Charm spell applied', spell);
    },
    update: (troll, spell) => {
      troll.health += spell.strength;
      console.log(`${troll.name} has been healed by ${spell.strength}. New health: ${troll.health}`);
    }
  },
  "curse": {
    apply: (spell) => {
      console.log('Curse spell applied', spell);
    },
    update: (troll, spell) => {
      troll.health -= spell.strength;
      if (troll.health <= 0) {
        troll.isAlive = false;
        console.log(`${troll.name} has died from the curse.`);
      } else {
        console.log(`${troll.name} has been cursed. New health: ${troll.health}`);
      }
    }
  },
  "transfiguration": {
    apply: (spell) => {
      console.log('Transfiguration spell applied', spell);
    },
    update: (troll) => {
      troll.name = "Transfigured " + troll.name;
      console.log(`${troll.name} has been transfigured.`);
    }
  },
  "trollDestroyer": {
    apply: (spell) => {
      console.log('Troll Destroyer spell applied', spell);
    },
    update: (troll) => {
      troll.health = 0;
      troll.isAlive = false;
      console.log(`${troll.name} has been destroyed.`);
    }
  }
};