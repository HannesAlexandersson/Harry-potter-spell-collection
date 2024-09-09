import { useSpells } from "../contexts/spellContext";

function SpellList() {
  const { spells } = useSpells(); // Use the custom hook to access the spells context

  return (
    <div>
      <h2>Your Spells</h2>
      <ol className="list">
        {spells.map((spell, index) => (
          <li key={index}>
            {spell.name} ({spell.type}) - Strength: {spell.strength}, Range: {spell.range}, Duration: {spell.duration}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SpellList;