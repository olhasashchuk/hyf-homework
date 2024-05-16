function formatCreditCardNumber(number) {
   // Check if input is a valid number
   if (typeof number !== 'number' || isNaN(number)) {
       return "This is not a number";
   }

   const charsNumber = number.toString().split('');
   const len = charsNumber.length;
   const formattedChunks = [];

   for (let i = 0; i < len; i += 4) {
       const chunk = charsNumber.slice(i, i + 4).join('');
       formattedChunks.push(chunk);
   }
   return formattedChunks.join(' ');
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);