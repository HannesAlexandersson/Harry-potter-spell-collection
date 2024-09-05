import SpellList from './components/SpellList';
import SortingHat from './components/SortingHat';
import SpellManager from './components/SpellManager';
import Character from './components/Character';
import { characters } from '../lib/characters'
import MaraudersMap from './components/MaraudersMap';
import { SpellsProvider } from './contexts/spellContext';
import { LocationProvider } from './contexts/locationContext';
import './App.css'

function App() {


/*
  Any component wrapped by the SpellsProvider can access the spells stored in context. 
  For example, a SpellList component can use useSpells to access the list of spells 
  and render them.
*/

  return (
    <>
    
      <SpellsProvider>
        <div className='header'><h1 className='title'>Hogwarts school of magic</h1></div>
        <SortingHat />     

        <div className='spellmanager'>          
            <SpellManager />  
        </div>
        <div className='spelllist'>        
            <SpellList />
        </div>
        <LocationProvider>
        <div className='mapChars'>
          {Object.values(characters).map((char, index) => (
            <Character key={index} name={char.name} />
          ))}
        </div>
         {/*  <div className='mapChars'>
            <Character name="Harry" />
            <Character name="Hermione" />
            <Character name="Snape" />
          </div> */}
          <div className='mauradersmap'>
            <MaraudersMap />
          </div>
        </LocationProvider>
      </SpellsProvider>
    
    </>
  )
}

export default App
