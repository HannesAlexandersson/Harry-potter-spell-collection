import { createContext, useState, useContext } from 'react';

//create the context to store the trolls in
const TrollsContext = createContext();



export function TrollsProvider({ children }) {
  const [trolls, setTrolls] = useState([]);

  const addTroll = (troll) => {
    setTrolls((prevTrolls) => [...prevTrolls, troll]);
  };

  return (
    <TrollsContext.Provider value={{ trolls, addTroll, setTrolls }}>
      {children}
    </TrollsContext.Provider>
  )
}

//we created a custom hook useSpells that allows components to access the spells context.
export const useTrolls = () => useContext(TrollsContext);