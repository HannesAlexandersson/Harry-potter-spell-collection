import { createContext, useState, useContext } from 'react';
import { spellStrategies } from '../strategies/spellStrategies';

//create the context to store the trolls in
const TrollsContext = createContext();



export function TrollsProvider({ children }) {
  const [trolls, setTrolls] = useState([]);
//the update method of the strategies could reside in the context file, where you probably already have an addTroll function.
const updateTroll = (troll, spell) => {
  const strategy = spellStrategies[spell.type];
  if (strategy) {
    strategy.update(troll, spell);
  } else {
    console.error(`No strategy found for spell type: ${spell.type}`);
  }

  // After updating, replace the troll in the state with the updated one
  setTrolls(prevTrolls => 
    prevTrolls.map(t => t.name === troll.name ? { ...troll } : t)
  );
};



  const addTroll = (troll) => {
    setTrolls((prevTrolls) => [...prevTrolls, troll]);
  };

  return (
    <TrollsContext.Provider value={{ trolls, addTroll, setTrolls, updateTroll }}>
      {children}
    </TrollsContext.Provider>
  )
}

//we created a custom hook useSpells that allows components to access the spells context.
export const useTrolls = () => useContext(TrollsContext);