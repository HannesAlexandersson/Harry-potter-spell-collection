import { useState } from 'react'
import { useSpells } from "../contexts/spellContext";

function SpellList() {
  const { spells } = useSpells(); //use the custom hook to access the spells context
  const [expandedSpell, setExpandedSpell] = useState(null); 

  const toggleSpell = (index) => {
    if (expandedSpell === index) {
      setExpandedSpell(null); 
    } else {
      setExpandedSpell(index);
    }
  };

  return (
    <div>
      <h2>Your Spells</h2>
      <ol className="list">
        {spells.map((spell, index) => (
          <li key={index}>
            <button className='spellButton'
              onClick={() => toggleSpell(index)}               
            >
              {spell.name}
            </button>
            {expandedSpell === index && (
              <div className="spell-details" >
                <p>Type: {spell.type}</p>
                <p>Strength: {spell.strength}</p>
                <p>Range: {spell.range}</p>
                <p>Duration: {spell.duration}</p>
                {spell.type === 'Transfiguration' &&
                  <p>Transformation: {spell.transformation}</p>
                }
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SpellList;
