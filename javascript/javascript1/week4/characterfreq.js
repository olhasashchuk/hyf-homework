// Character frequencies
// Write a function that counts the frequency of characters in a string:

function getCharacterFrequencies(text) {
  const arrText = text.split('');
  const counts = {};
  
  arrText.forEach(item => { 
    if (counts[item]) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
  });
  const characters = Object.keys(counts).map(item => ({
    character: item,
    count: counts[item]
  }));

  return { characters, length: arrText.length };
}

console.log(getCharacterFrequencies('happy'));