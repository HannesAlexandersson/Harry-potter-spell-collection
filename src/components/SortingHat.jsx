import { useState, useEffect } from 'react'
import { houseManager } from '../singelton/HouseManager'


function SortingHat(){
  //const [house, setHouse] = useState(houseManager.getHouse() || 'Gryffindor');  
  const [house, setHouse] = useState('Hufflepuff');  

  const [isHouseSelected, setIsHouseSelected] = useState(false);
  

  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

  useEffect(() => {    
    if (houseManager.house) {
      setHouse(houseManager.house);
      setIsHouseSelected(true); // Disable house selection if house is already set
    }
  }, []); 

    
  const handleHouseSelection = () => {
    if (!isHouseSelected && house) {
      houseManager.setHouse(house);
      // Disable house selection if house is already set
      setIsHouseSelected(true); 
      Object.freeze(houseManager);
    }
  }; 

  

  return(
    <>
    <div className="sortingHat">

          <h2>Choose your house</h2>
          
          <select 
              onChange={(e) => setHouse(e.target.value)} 
              value={house}
              disabled={houseManager.house !== null && houseManager.house !== ''}
            >
              <option value="">Select a house</option>
              {houses.map((houseS, index) => (
                <option key={index} value={houseS}>{houseS}</option>
              ))}
            </select>
          
            <button 
              onClick={handleHouseSelection}
              disabled={houseManager.house !== null && houseManager.house !== ''}
            >
              Submit
            </button>
          
        </div>
          {house && <p>You have been sorted into {house}</p>}
    </>
  );
}

export default SortingHat;