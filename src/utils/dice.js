export const rollDie = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

// function cryptoRoll(sides) {
//   const array = new Uint32Array(1);
//   window.crypto.getRandomValues(array);
//   return (array[0] % sides) + 1;
// }
