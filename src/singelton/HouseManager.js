let instance = null;

class HouseManager {
  constructor() {
    if (!instance) {
      this.configObject = {
        darkMode: false,
        colorTheme: 'light',
        direction: 'ltr',
      };
      instance = this;
      this.house = null;
    }
    return instance;
  }

  setHouse(house) {
    this.house = house;
}

getHouse() {
    return this.house;
}
}
export const houseManager = new HouseManager();
/* export const HouseManager = (() => {
  let instance = null;

  function createInstance(house) {
    return {
      // Config object with user preferences
      configObject: {
        darkMode: false,
        colorTheme: 'light',
        direction: 'ltr',
      },
      // Rest of properties
      name: 'Single instance #1',
      level: 1,
      house: house, 
    };
  }

  return {
    getInstance: function(house) {
      if (!instance) {
        instance = createInstance(house);
      }
      return instance;
    },
    setName: function(newName) {
      if (instance) {
        instance.name = newName;
      }
    },
    setLevel: function(newLevel) {
      if (instance) {
        instance.level = newLevel;
      }
    },
    setHouse: function(newHouse) {
      if (instance) {
        instance.house = newHouse;
      }
    },
    setConfig: function(config) {
      if (instance) {
        instance.configObject = config;
      }
    },
    getConfig: function() {
      if (instance) {
        return instance.configObject;
      }
    },
    getHouse: function() {
      if (instance) {
        return instance.house;
      }
    }
  };
})();
 */

