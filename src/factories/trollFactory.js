
export const trollFactory = new Map();

trollFactory.set('Forest Troll', (name) => ({
    name: name || 'The Forest Troll',
    health: 150,
    damage: 20,
    isDead: false,
}));

trollFactory.set('Mountain Troll', (name) => ({
    name: name || 'The Mountain Troll',
    health: 200,
    damage: 10,
    isDead: false,
}))

trollFactory.set('Svamp Troll', (name) => ({
  name: name || 'The Svamp Troll',
  health: 100,
  damage: 30,
  isDead: false,
}))

//actual function to create a basic troll with a name and a type
export function createTroll(trollType, name) {
    const trollCreator = trollFactory.get(trollType);
    if(!trollCreator) {
        throw new Error(`unknown troll type: ${trollType}`);
    }
    return trollCreator(name);
}

