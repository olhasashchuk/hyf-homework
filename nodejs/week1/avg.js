function getAverage(numbers) {
   if (numbers.length === 0) {
      console.log("No valid numbers provided");
   } else {
      const sum = numbers.reduce((acc, number) => acc + parseInt(number, 10), 0);
      const avgNumber = sum / numbers.length;
      console.log(avgNumber);
   }
}

const args = process.argv.slice(2);
const numbers = args.filter(arg => !isNaN(arg)); 
const averageArgs = getAverage(numbers);