import { useState } from 'react';
import { useLocation } from '../contexts/locationContext';
import { rooms } from '../../lib/rooms';

function Character({ name }) {
  const { updateLocation } = useLocation();
  const [selectedRoom, setSelectedRoom] = useState('');

  const moveCharacter = () => {
    if (selectedRoom) {
      // Call the updateLocation function to move the character and handle notifications
      updateLocation(name, selectedRoom);      
      setSelectedRoom('');
    } else {
      // Alert if no room is selected
      alert("Please select a room for the character to move to.");
    }
  };

  return (
    <div className='container'>
      <h3>{name}</h3>
      
      {/* Dropdown for selecting a room */}
      <select 
        value={selectedRoom} 
        onChange={(e) => setSelectedRoom(e.target.value)}
      >
        <option value="">Select a room</option>
        {Object.keys(rooms).map((room, index) => (
          <option key={index} value={room}>{room}</option>
        ))}
      </select>
      
      {/* Button to move character */}
      <button onClick={moveCharacter}>Move {name} to {selectedRoom}</button>
    </div>
  );
}

export default Character;