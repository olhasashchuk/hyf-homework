// Find the individual number and the total number of Danish letters in a string.

const danishLetters = ["æ", "ø", "å"];
function getDanishLetters(str) {
   const counts = { total: 0 };

   for (const char of str){
      if(danishLetters.includes(char)) {
         if (counts[char] === undefined) {
            counts[char] = 1;
        } else {
            counts[char]++;
        }
         counts.total++;
      }
   }

   return counts;
}


const danishString = "Jeg har en blå bil";
console.log(getDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(getDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}