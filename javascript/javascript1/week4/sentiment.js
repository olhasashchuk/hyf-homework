function getWordsFromText (text, wordsList) {
   const words = [];
   for (let i = 0; i < text.length; i++ ){
      if(wordsList.includes(text[i])) {
         words.push(text[i])
      } 
   }
   return words
}

function getSentimentScore(text, arrPositiveWords, arrNegativeWords) {
   const arrText = text.split(" ");
   console.log(arrText) 

   const positiveWords = getWordsFromText(arrText, arrPositiveWords);
   const negativeWords = getWordsFromText(arrText, arrNegativeWords);

   return {
      score: positiveWords.length - negativeWords.length,
      positiveWords,
      negativeWords,
   }
}

const arrPositiveWords = [
   'Beautiful',
   'Brilliant',
   'Fantastic',
   'Wonderful',
   'Amazing',
   'Incredible',
   'Terrific',
   'Excellent',
   'Fabulous',
   'Outstanding', 
]

const arrNegativeWords = [
   'Terrible',
   'Awful',
   'Horrible',
   'Disappointing',
   'Unpleasant',
   'Annoying',
   'Frustrating',
   'Disturbing',
   'Dreadful',
   'Horryfing' 
]


const sentimentScoreObject = getSentimentScore(
   'I am mega Amazing Fantastic Disappointing', 
   arrPositiveWords, 
   arrNegativeWords
);

console.log(sentimentScoreObject);

