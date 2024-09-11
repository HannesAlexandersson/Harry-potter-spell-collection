
import { useState } from 'react';
import { useTrollFacade } from '../facades/ManagerFacade'

function TrollManager() {
  const [trollType, setTrollType] = useState('');
  const [trollName, setTrollName] = useState('');

  //define the facade
  const { createAndDecorateTroll } = useTrollFacade();

  const handleCreateTroll = () => {
  
    createAndDecorateTroll(trollType, trollName);

    //reset form
    setTrollName('');
    setTrollType('');
  };



  return (
    <div className="trollManager">
      <h2>Create and Manage Trolls</h2>

      <select value={trollType} onChange={(e) => setTrollType(e.target.value)}>
        <option value="">Select a troll type</option>
        <option value="Forest Troll">Forest Troll</option>
        <option value="Mountain Troll">Mountain Troll</option>
        <option value="Svamp Troll">Swamp Troll</option>
      </select>

      <input 
          type="text" 
          placeholder="Enter troll name"
          value={trollName}
          onChange={(e) => setTrollName(e.target.value)}
        />

      <button onClick={handleCreateTroll}>Create Troll</button>

      
    </div>
  );
}

export default TrollManager;
