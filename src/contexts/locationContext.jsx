import { createContext, useState, useContext } from 'react';

//A context provider that maintains and broadcasts the locations of all observable entities.


const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [locations, setLocations] = useState({});

  const updateLocation = (character, newLocation) => {
    setLocations((prevLocations) => ({
      ...prevLocations,
      [character]: newLocation,
    }));
  };

  return (
    <LocationContext.Provider value={{ locations, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);


