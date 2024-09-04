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
