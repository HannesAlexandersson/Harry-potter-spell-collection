/*
When done with the houseManager, please create a src/components/SpellManager.jsx in where you can add a 
form to select the value.
*/

function SpellManager() {

  return(
    <>    

      <div className="spellManager">
      <h1>Choose your spell</h1>
        <select>
          <option value="">Select a spell</option>
          <option value="Alohomora">Alohomora</option>
          <option value="Expelliarmus">Expelliarmus</option>
          <option value="Lumos">Lumos</option>
          <option value="Obliviate">Obliviate</option>
          <option value="Wingardium Leviosa">Wingardium Leviosa</option>
        </select>
        <button>Submit</button>
      </div>
    </>
  )
};

export default SpellManager;