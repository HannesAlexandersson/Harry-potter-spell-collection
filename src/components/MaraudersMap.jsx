import { useLocation } from '../contexts/locationContext';

function MaraudersMap() {
  //const { locations } = useLocation(); // Access the locations from context
  const { rooms, notifications } = useLocation();

  return (
    <div className='mapContainer'>
      <h2>Marauder&lsquo;s Map</h2>
      <ul>
        {Object.entries(rooms).map(([roomName, roomData]) => (
          <li key={roomName}>
            {roomName}: {roomData.charactersInRoom.length > 0 ? roomData.charactersInRoom.join(', ') : 'Empty'}
          </li>
        ))}
      </ul>

      <h3>Notifications</h3>
      <ul>
        {notifications.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default MaraudersMap;