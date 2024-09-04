import React, { createContext, useState, useContext } from 'react';
/*
  We created a SpellsContext using the React.createContext() function. 
  This context allows different components to access the spells data and 
  functions like addSpell without passing props down manually through every 
  level of the component tree.
*/


//create the context to store the spells in
const SpellsContext = createContext();


/*
  We wrapped our application (or a part of it) with a SpellsProvider component. 
  This component provides the context to all its children. Inside the provider, 
  we manage the state for spells using useState and expose this state along with 
  any functions (e.g., addSpell) that manipulate the state through the context.
*/

export function SpellsProvider({ children }) {
  const [spells, setSpells] = useState([]);

  const addSpell = (spell) => {
    setSpells((prevSpells) => [...prevSpells, spell]);
  };

  return (
    <SpellsContext.Provider value={{ spells, addSpell }}>
      {children}
    </SpellsContext.Provider>
  );
}

//we created a custom hook useSpells that allows components to access the spells context.
export const useSpells = () => useContext(SpellsContext);