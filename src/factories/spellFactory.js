
export const spellFactory = new Map();

spellFactory.set('charm', (name) => ({
  type: 'Charm',
  name: name || 'Unnamed Charm',
}));

spellFactory.set('curse', (name) => ({
  type: 'Curse',
  name: name || 'Unnamed Curse',
}));

spellFactory.set('transfiguration', (name) => ({
  type: 'Transfiguration',
  name: name || 'Unnamed Transfiguration',
}));

spellFactory.set('trollDestroyer', (name) => ({
  type: 'Troll Destroyer',
  name: name || 'Unnamed Troll Destroyer',
}));

// Function to create a spell
export function createSpell(spellType, name) {
  const spellCreator = spellFactory.get(spellType.toLowerCase());
  if (!spellCreator) {
      throw new Error(`Unknown spell type: ${spellType}`);
  }
  return spellCreator(name);
}