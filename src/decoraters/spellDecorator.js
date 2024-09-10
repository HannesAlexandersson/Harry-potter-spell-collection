export function addStrength(spell, strength = 10) {
  return { ...spell, strength };
}

export function addRange(spell, range = 'medium') {
  return { ...spell, range };
}

export function addDuration(spell, duration = '1 minute') {
  return { ...spell, duration };
}


//let the user add their own transformation 
export function addTransformation(spell, transformation = ' ') {
  return { ...spell, transformation };
}

