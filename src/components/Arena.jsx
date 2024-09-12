import { useSpells } from "../contexts/spellContext";
import { useTrolls } from "../contexts/trollContext";
import { useState } from "react";

const Arena = () => {
  const { spells } = useSpells();
  const { trolls, setTrolls } = useTrolls();
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [selectedTroll, setSelectedTroll] = useState(null);

  const castSpellOnTroll = () => {
    if (selectedSpell && selectedTroll) {      
      const newTrolls = trolls.map((troll) => {
        if (troll.name === selectedTroll.name) {
          //new health based on spell strength
          const newHealth = troll.health - selectedSpell.strength;
          const updatedTroll = {
            ...troll,
            health: newHealth > 0 ? newHealth : 0,
            isDead: newHealth <= 0
          };
          return updatedTroll;
        }
        return troll;
      });     
      setTrolls(newTrolls);
      
      setSelectedSpell(null);
      setSelectedTroll(null);
    } else {
      alert("Please select both a spell and a troll to cast the spell.");
    }
  };

  return (
    <div className="arena">
      <h2>Arena</h2>

      
      <div>
        <h3>Spells</h3>
        <ul>
          {spells.map((spell, index) => (
            <li
              key={index}
              onClick={() => setSelectedSpell(spell)}
              style={{
                cursor: "pointer",
                fontWeight: selectedSpell?.name === spell.name ? "bold" : "normal"
              }}
            >
              {spell.name} (Strength: {spell.strength})
            </li>
          ))}
        </ul>
      </div>

      
      <div>
        <h3>Trolls</h3>
        <ul>
          {trolls.map((troll, index) => (
            <li
              key={index}
              onClick={() => setSelectedTroll(troll)}
              style={{
                cursor: "pointer",
                fontWeight: selectedTroll?.name === troll.name ? "bold" : "normal"
              }}
            >
              {troll.name} (Health: {troll.health}) {troll.isDead ? " - Dead" : ""}
            </li>
          ))}
        </ul>
      </div>

      
      <button onClick={castSpellOnTroll} disabled={!selectedSpell || !selectedTroll}>
        Cast Spell
      </button>

      
      {selectedSpell && selectedTroll && (
        <div>
          <h4>Cast {selectedSpell.name} on {selectedTroll.name}</h4>
        </div>
      )}
    </div>
  );
};

export default Arena;
