import { useState } from 'react'
import { useTrolls } from "../contexts/trollContext";

function TrollList() {
  const { trolls } = useTrolls(); //use the custom hook to access the spells context
  const [expandedTroll, setExpandedTroll] = useState(null); 

  const toggleTroll = (index) => {
    if (expandedTroll === index) {
      setExpandedTroll(null); 
    } else {
      setExpandedTroll(index);
    }
  };

  return (
    <div>
      <h2>The Trolls</h2>
      <ol className="list">
        {trolls.map((troll, index) => (
          <li key={index}>
            <button className='trollButton'
              onClick={() => toggleTroll(index)}               
            >
              {troll.name}
            </button>
            {expandedTroll === index && (
              <div className="troll-details" >
                <p>Type: {troll.type}</p>
                <p>Strength: {troll.strength}</p>
                <p>Health: {troll.health}</p>              
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TrollList;