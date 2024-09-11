import { useSpells } from "../contexts/spellContext";
import { useTrolls } from "../contexts/trollContext";
import { useState } from "react";

const Arena = () => {
  const { spells } = useSpells();
  const { trolls, setTrolls } = useTrolls(); // assuming your context exposes setTrolls to update troll state
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [selectedTroll, setSelectedTroll] = useState(null);

  const castSpellOnTroll = () => {
    if (selectedSpell && selectedTroll) {
      // Simulate casting the spell
      const newTrolls = trolls.map((troll) => {
        if (troll.name === selectedTroll.name) {
          // Calculate the new health based on spell strength
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

      // Update the troll state
      setTrolls(newTrolls);

      // Reset selections after casting
      setSelectedSpell(null);
      setSelectedTroll(null);
    } else {
      alert("Please select both a spell and a troll to cast the spell.");
    }
  };

  return (
    <div className="arena">
      <h2>Arena</h2>

      {/* List Spells */}
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

      {/* List Trolls */}
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

      {/* Cast Spell Button */}
      <button onClick={castSpellOnTroll} disabled={!selectedSpell || !selectedTroll}>
        Cast Spell
      </button>

      {/* Display selected spell and troll */}
      {selectedSpell && selectedTroll && (
        <div>
          <h4>Cast {selectedSpell.name} on {selectedTroll.name}</h4>
        </div>
      )}
    </div>
  );
};

export default Arena;
