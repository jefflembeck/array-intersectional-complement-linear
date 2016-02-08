module.exports = function(a, b){
  if(!(Array.isArray(a) && Array.isArray(b))){
    throw new Error("Both arguments must be an Array");
  }

  const universe = new Set(a.concat(b));
  const setB = new Set(b);

  const intersection = new Set(a.filter(x => setB.has(x)));

  return Array.from(universe).filter( x => !intersection.has(x) );
};
