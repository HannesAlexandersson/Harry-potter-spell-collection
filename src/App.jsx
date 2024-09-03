import { useState, useEffect } from 'react'
//import { HouseManager } from './singelton/HouseManager'
import SortingHat from './components/SortingHat';
import SpellManager from './components/SpellManager';
import './App.css'

function App() {
 /*  const [house, setHouse] = useState('');
  const singletonInstance = HouseManager.getInstance();

  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']; */

  /* useEffect(() => {    
    if (singletonInstance.house) {
      setHouse(singletonInstance.house);
      
    }
  }, [singletonInstance]); */
/* 
  const handleHouseSelection = () => {
    if (!singletonInstance.house) {
      HouseManager.setHouse(house); // set the house in the singleton instance
      setHouse(house); // set the house in the local state
    }
  }; */



  return (
    <>
    
     <SortingHat />

      <div className='spellmanager'>
         
          <SpellManager />
       
        
      </div>
    </>
  )
}

export default App
