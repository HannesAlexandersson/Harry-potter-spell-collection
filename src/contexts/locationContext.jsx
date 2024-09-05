import { createContext, useState, useContext } from 'react';
import { rooms as initialRooms } from '../../lib/rooms';

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [rooms, setRooms] = useState(initialRooms);
  const [notifications, setNotifications] = useState([]);

  /* const updateLocation = (characterName, newRoomName) => {
    // Check if the room exists
    if (!rooms[newRoomName]) {
      alert(`The room "${newRoomName}" does not exist.`);
      return;
    }

    // Get the updated rooms
    const updatedRooms = { ...rooms };
    let notification = '';

    // Find the current room of the character and remove them from it
    let currentRoomName = null;
    for (const roomName in updatedRooms) {
      if (updatedRooms[roomName].charactersInRoom.includes(characterName)) {
        currentRoomName = roomName;
        updatedRooms[roomName].charactersInRoom = updatedRooms[roomName].charactersInRoom.filter(char => char !== characterName);
        break;
      }
    }

    // Check if the character is already in the new room
    if (currentRoomName === newRoomName) {
      alert(`${characterName} is already in the ${newRoomName}.`);
      return;
    }

    // Check if the move is possible (e.g., room capacity, restrictions)
    // For simplicity, we assume all moves are possible unless specified otherwise
    // Add character to the new room and check for existing characters
    if (!updatedRooms[newRoomName].charactersInRoom.includes(characterName)) {
      const charactersInNewRoom = updatedRooms[newRoomName].charactersInRoom;
      if (charactersInNewRoom.length > 0) {
        notification = `${characterName}!! ${charactersInNewRoom.join(', ')} are in the ${newRoomName}!!`;
        alert(notification);  // Notify the user
      }
      
      updatedRooms[newRoomName].charactersInRoom.push(characterName);
      setRooms(updatedRooms);

      // Update notifications state
      if (notification) {
        setNotifications(prevNotifications => [...prevNotifications, notification]);
      }
    } else {
      alert(`${characterName} cannot be moved to ${newRoomName} because they are already there.`);
    }
  }; */

  const allowedToShareRoom = new Set(['Harry', 'Hermione']); // Characters allowed to share rooms
  const characterToPrevent = 'Snape'; // Character that should not share rooms

  const updateLocation = (characterName, newRoomName) => {
    // Check if the room exists
    if (!rooms[newRoomName]) {
      alert(`The room "${newRoomName}" does not exist.`);
      return;
    }

    // Get the updated rooms
    const updatedRooms = { ...rooms };
    let notification = '';

    // Find the current room of the character and remove them from it
    let currentRoomName = null;
    for (const roomName in updatedRooms) {
      if (updatedRooms[roomName].charactersInRoom.includes(characterName)) {
        currentRoomName = roomName;
        updatedRooms[roomName].charactersInRoom = updatedRooms[roomName].charactersInRoom.filter(char => char !== characterName);
        break;
      }
    }

    // If the character is already in the new room
    if (currentRoomName === newRoomName) {
      alert(`${characterName} is already in the ${newRoomName}.`);
      return;
    }

    // Check if the new room already has characters
    const charactersInNewRoom = updatedRooms[newRoomName].charactersInRoom;

    // Notification setup
    if (charactersInNewRoom.length > 0) {
      // Check if any of the characters in the room is Snape
      if (charactersInNewRoom.includes(characterToPrevent) ) {
        alert(`Move denied! ${characterToPrevent} is in the ${newRoomName}.`);
        return;
      }
      
      notification = `${characterName}!! ${charactersInNewRoom.join(', ')} are in the ${newRoomName}!!`;
      alert(notification);  // Notify the user
    } else {
      // No one else in the room
      notification = `${characterName} has entered the ${newRoomName}.`;
      alert(notification);  // Notify the user
    }

    // Add character to the new room
    updatedRooms[newRoomName].charactersInRoom.push(characterName);
    setRooms(updatedRooms);

    // Update notifications state
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  };

  return (
    <LocationContext.Provider value={{ rooms, updateLocation, notifications }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);