import { useState } from 'react';
import { useSpells } from "../contexts/spellContext";
import { createSpell } from '../factories/spellFactory';

function SpellManager() {
  const [spellType, setSpellType] = useState('');
  const [spellName, setSpellName] = useState('');
  const { addSpell } = useSpells();

  const handleCreateSpell = () => {
    if (spellType && spellName) {
      try {
        const newSpell = createSpell(spellType, spellName);
        addSpell(newSpell);
        setSpellType('');
        setSpellName('');
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
        
        
        <input 
          type="text" 
          placeholder="Enter spell name"
          value={spellName}
          onChange={(e) => setSpellName(e.target.value)}
        />

        
        <button onClick={handleCreateSpell}>Submit</button>
      </div>
    </>
  )
};

export default SpellManager;