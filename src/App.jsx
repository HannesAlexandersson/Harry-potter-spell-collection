import SpellList from './components/SpellList';
import SortingHat from './components/SortingHat';
import SpellManager from './components/SpellManager';
import Character from './components/Character';
import MaraudersMap from './components/MaraudersMap';
import TrollManager from './components/TrollManager';
import { SpellsProvider } from './contexts/spellContext';
import { LocationProvider } from './contexts/locationContext';
import './App.css'
import { TrollsProvider } from './contexts/trollContext';
import TrollList from './components/TrollList';
import Arena from './components/Arena';

function App() {


/*
  Any component wrapped by the SpellsProvider can access the spells stored in context. 
  For example, a SpellList component can use useSpells to access the list of spells 
  and render them.
*/

  return (
    <>
    <LocationProvider>
      <SpellsProvider>
        <TrollsProvider>
      <div className="main">
        <div className='header'><h1 className='title'>Hogwarts school of magic</h1></div>
        <SortingHat />     
        <div className="spellBox">
          <div className='spellmanager'>          
              <SpellManager />  
          </div>
        </div>
          <div className='spelllist'>        
              <SpellList />
          </div>
        <div className='mapChars'>
          <Character name="Harry" />
          <Character name="Hermione" />
          <Character name="Snape" />
        </div>
        <div className='mauradersmap'>
          <MaraudersMap />
        </div>
        </div>

        <div className='trolls'>
          <TrollManager />
          <TrollList />
        </div>

        <div className='arena'>
          <Arena />
        </div>
        </TrollsProvider>
      </SpellsProvider>
    </LocationProvider>
    </>
  )
}

export default App
