// desing patterns - factory pattern 02. what patterns suits best? in this case I reckon Map is the best
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
  type: 'TrollDestroyer',
  name: name || 'Unnamed Troll Destroyer',
}));
//actual function to create a basic spell with a name and a type
export function createSpell(spellType, name) {
  const spellCreator = spellFactory.get(spellType);
  if (!spellCreator) {
      throw new Error(`Unknown spell type: ${spellType}`);
  }
  return spellCreator(name);
}