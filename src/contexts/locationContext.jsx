import { createContext, useState, useContext } from 'react';
import { rooms as initialRooms } from '../../lib/rooms';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [rooms, setRooms] = useState(initialRooms);
  const [notifications, setNotifications] = useState([]);

  
  const updateLocation = (characterName, newRoomName) => {
    const updatedRooms = { ...rooms };

    //remove character from previous room
    for (const roomName in updatedRooms) {
      if (updatedRooms[roomName].charactersInRoom.includes(characterName)) {
        updatedRooms[roomName].charactersInRoom = updatedRooms[roomName].charactersInRoom.filter(char => char !== characterName);
      }
    }
    
    const charactersInNewRoom = updatedRooms[newRoomName].charactersInRoom;
    let notification = '';
    if (charactersInNewRoom.length > 0) {
      notification = `${characterName}!! ${charactersInNewRoom.join(', ')} are in the ${newRoomName}!!`;
      
      // Display the notification as an alert
      alert(notification);
    }
    
    
    updatedRooms[newRoomName].charactersInRoom.push(characterName);

    
    setRooms(updatedRooms);

    
    if (notification) {
      setNotifications(prevNotifications => [...prevNotifications, notification]);
    }
  };

  return (
    <LocationContext.Provider value={{ rooms, updateLocation, notifications }}>
      {children}
    </LocationContext.Provider>
  );
}

// Custom hook to access location context
export const useLocation = () => useContext(LocationContext);