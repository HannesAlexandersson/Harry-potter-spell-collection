import { useLocation } from '../contexts/locationContext';

function MaraudersMap() {
  const { locations } = useLocation(); // Access the locations from context

  return (
    <div className='mapContainer'>
      <h2>Marauder&lsquo;s Map</h2>
      <ul>
        {Object.entries(locations).map(([character, location]) => (
          <li key={character}>
            {character} is currently in the {location}.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaraudersMap;