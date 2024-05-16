function isPalindrome(text) {
   const rev = text.split('').reverse().join('');
   return text == rev
}

function longestPalindrome(text){
   let max_length = 0;
   let maxp = '';

   for(let i = 0; i < text.length; i++) {
      const subsFromText = text.substr(i, text.length);
      for (let j = subsFromText.length; j >=0; j--) {
         const subSubsFromText = subsFromText.substr(0, j);
         if(subSubsFromText.length <= 1)
            continue;
         if(isPalindrome(subSubsFromText)) {
            if (subSubsFromText.length > max_length) {
               max_length = subSubsFromText.length;
               maxp = subSubsFromText;
            }
         }
      } 
   }
   return maxp

}

console.log(longestPalindrome("babad"))