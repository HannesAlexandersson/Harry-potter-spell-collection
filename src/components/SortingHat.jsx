import { useState, useEffect } from 'react'
import { houseManager } from '../singelton/HouseManager'


function SortingHat(){
  const [house, setHouse] = useState('');
  const singletonInstance = HouseManager.getInstance();

  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];


  const handleHouseSelection = () => {
    if (!singletonInstance.house) {
      houseManager.setHouse(house); // set the house in the singleton instance
      setHouse(house); // set the house in the local state
    }
  };


  return(
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
    </>
  );
}

export default SortingHat;