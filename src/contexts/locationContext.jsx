import { createContext, useState, useContext } from 'react';
import { rooms as initialRooms } from '../../lib/rooms';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [rooms, setRooms] = useState(initialRooms);
  const [notifications, setNotifications] = useState([]);


  //const allowedToShareRoom = new Set(['Harry', 'Hermione']); 
  const characterToPrevent = 'Snape'; 

  //transporter methods
  const updateLocation = (characterName, newRoomName) => {
    if (!rooms[newRoomName]) {
      alert(`The room "${newRoomName}" does not exist.`);
      return;
    }

    //get the new rooom states
    const updatedRooms = { ...rooms };
    let notification = '';
    //see what room the char is in now and remove the char from the room
    let currentRoomName = null;
    for (const roomName in updatedRooms) {
      if (updatedRooms[roomName].charactersInRoom.includes(characterName)) {
        currentRoomName = roomName;
        updatedRooms[roomName].charactersInRoom = updatedRooms[roomName].charactersInRoom.filter(char => char !== characterName);
        break;
      }
    }
    //check if the char is trying to move to the room they are already in
    if (currentRoomName === newRoomName) {
      alert(`${characterName} is already in the ${newRoomName}.`);
      return;
    }

    //see what characters if any are in the new room
    const charactersInNewRoom = updatedRooms[newRoomName].charactersInRoom;
    //see if the move is possible based on what chars are in the new room IE if Snape is in the room
    if (charactersInNewRoom.length > 0) {
      if (charactersInNewRoom.includes(characterToPrevent) ) {
        alert(`Move denied! ${characterToPrevent} is in the ${newRoomName}.`);
        return;
      }
      
      notification = `${characterName}!! ${charactersInNewRoom.join(', ')} are in the ${newRoomName}!!`;
      alert(notification);  
    } else {
      
      notification = `${characterName} has entered the ${newRoomName}.`;
      alert(notification);  
    }

    
    updatedRooms[newRoomName].charactersInRoom.push(characterName);
    setRooms(updatedRooms);

    
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  };

  return (
    <LocationContext.Provider value={{ rooms, updateLocation, notifications }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);