import { useState } from 'react';
import { useSpells } from "../contexts/spellContext";
import { createSpell } from '../factories/spellFactory';
import { addStrength, addRange, addDuration } from '../decoraters/spellDecorator'

function SpellManager() {
  const [spellType, setSpellType] = useState('');
  const [spellName, setSpellName] = useState('');
  const { addSpell } = useSpells();

  //states for the decorator
  const [strength, setStrength] = useState();
  const [range, setRange] = useState('medium');
  const [duration, setDuration] = useState('');

  const handleCreateSpell = () => {
    if (spellType && spellName) {
      try {
        let newSpell = createSpell(spellType, spellName);
        newSpell = addStrength(newSpell, strength);
        newSpell = addRange(newSpell, range);
        newSpell = addDuration(newSpell, duration);

        // Add the decorated spell to the context        
        addSpell(newSpell);

        // Reset the form
        setSpellType('');
        setSpellName('');
        setStrength();
        setRange('medium');
        setDuration('');
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Please select a spell type and provide a name.');
    }
  };

  return(
    <> 
      <div className="spellManager">
        <h2>Create your spell</h2>
        
        {/* Dropdown to select spell type */}
        <select 
          value={spellType} 
          onChange={(e) => setSpellType(e.target.value)}
        >
          <option value="">Select what type of spell you are creating</option>
          <option value="charm">Charm</option>
          <option value="curse">Curse</option>
          <option value="transfiguration">Transfiguration</option>
          <option value="trollDestroyer">Troll Destroyer</option>          
        </select>
        
        {/* Input field to set spell name */}
        <input 
          type="text" 
          placeholder="Enter spell name"
          value={spellName}
          onChange={(e) => setSpellName(e.target.value)}
        />

        {/* Additional fields for decorator properties */}
        <input 
          type="number" 
          placeholder="Enter strength"
          value={strength}
          onChange={(e) => setStrength(e.target.value)}
        />
        
        <label htmlFor="range">Select Spell Range:</label>
        <select           
          value={range} 
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
        
        <input 
          type="text" 
          placeholder="Enter duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        {/* Submit button to create spell */}
        <button onClick={handleCreateSpell}>Submit</button>
      </div>
    </>
  )
};

export default SpellManager;