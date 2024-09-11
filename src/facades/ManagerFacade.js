//import { useState } from 'react';
import { useSpells } from "../contexts/spellContext";
import { useTrolls } from '../contexts/trollContext';
import { createSpell } from '../factories/spellFactory';
import { addStrength, addRange, addDuration, addTransformation } from '../decoraters/spellDecorator'

import { createTroll } from '../factories/trollFactory';




  export function useTrollFacade() {
    const { addTroll } = useTrolls();

    const createAndDecorateTroll = (trollType, trollName) => {
      let newTroll = createTroll(trollType, trollName);

      //add decorates later HERE

      addTroll(newTroll);
      return newTroll
    }; 
    return { 
      createAndDecorateTroll
    };
  }

  export function useSpellFacade() {
    const { addSpell } = useSpells();
  
    const createAndDecorateSpell = (spellType, spellName, strength, range, duration, transformation) => {
      
  
      let newSpell = createSpell(spellType, spellName);
  
      newSpell = addStrength(newSpell, strength);
      newSpell = addRange(newSpell, range);
      newSpell = addDuration(newSpell, duration);
  
      if (spellType === 'transfiguration') {
        newSpell = addTransformation(newSpell, transformation);
      }
  
      addSpell(newSpell);
  
      return newSpell;
  };
  
    return {
      createAndDecorateSpell
    };
}
    
