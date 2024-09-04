import { useState, useEffect } from 'react'
//import { HouseManager } from './singelton/HouseManager'
import SortingHat from './components/SortingHat';
import SpellManager from './components/SpellManager';
import './App.css'

function App() {
  const [house, setHouse] = useState('');
  const [isHouseSelected, setIsHouseSelected] = useState(false);
  const singletonInstance = HouseManager.getInstance();

  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']; */

  useEffect(() => {    
    if (singletonInstance.house) {
      setHouse(singletonInstance.house);
      setIsHouseSelected(true); // Disable house selection if house is already set
    }
  }, [singletonInstance]);

  const handleHouseSelection = () => {
    if (!isHouseSelected && house) {
      HouseManager.setHouse(house);
      setIsHouseSelected(true); // Disable further selections immediately after the users has selected a house
      Object.freeze(HouseManager);
    }
  }; */



  return (
    <>
   
     <div className="sortingHat">

      <h1>Choose your house</h1>
      
      <select 
          onChange={(e) => setHouse(e.target.value)} 
          value={house}
          disabled={singletonInstance.house !== undefined && singletonInstance.house !== ''}
        >
          <option value="">Select a house</option>
          {houses.map((houseS, index) => (
            <option key={index} value={houseS}>{houseS}</option>
          ))}
        </select>
      
        <button 
          onClick={handleHouseSelection}
          disabled={singletonInstance.house !== undefined && singletonInstance.house !== ''}
        >
          Submit
        </button>      
     </div>

      {house && <p>You have been sorted into {house}</p>}

      <div className='spellmanager'>
          
          <SpellManager />
        
        
      </div>
    </>
  )
}

export default App
