// 3. Weather wear
// 1. First version
const clothesToWear = [
   'It\'s time to bust out the airtight spacesuit! Don\'t forget warm socks.',
   'Layer up like Russian nesting dolls!',
   'It\'s time for your favorite fur coat and, of course, ear muffs',
   'Definitely bundle up in layers like an onion - keep warm!',
   'Grab a thick jacket, but don\'t forget about style. Winter is still a fashionable season!',
   'Who says a jacket and scarf can\'t be stylish accessories?',
   'A stylish down jacket - your best friend during this time.',
   'Time for light jackets and spring boots!',
   'A spring jacket and a pair of stylish sunglasses - the perfect combination',
   'Of course, it\'s time for sneakers, shorts, and T-shirts!',
   'T-shirt and shorts - always a fitting choice!',
   'Maybe it\'s time to get out the swimsuit or shorts and a shirt?',
   'Forget about clothes and just splash around in the water!',
   'Well, in such heat, you can probably do without clothes, right?'
]

const dataTemperature = [-50, -30, -20, -10, -5, 0, 5, 10, 15, 20, 25, 30, 40];

function getClothesToWear(temperature) {
   for (let i = 0; i < dataTemperature.length; i++ ) {
      if (temperature <= dataTemperature[i]) {
         return clothesToWear[i];
      }
   }
   return clothesToWear[clothesToWear.length - 1];  
}

//2. Second version
// function getClothesToWear(temperature) {
//    if (temperature <= -50) {
//       return 'It\'s time to bust out the airtight spacesuit! Don\'t forget warm socks.';
//    } else if (temperature <= -30) {
//       return 'Layer up like Russian nesting dolls!';
//    } else if (temperature <= -20) {
//       return 'It\'s time for your favorite fur coat and, of course, ear muffs';
//    } else if (temperature <= -10) {
//       return 'Definitely bundle up in layers like an onion - keep warm!';
//    } else if (temperature <= -5) {
//       return 'Grab a thick jacket, but don\'t forget about style. Winter is still a fashionable season!';
//    } else if (temperature <= 0) {
//       return 'Who says a jacket and scarf can\'t be stylish accessories?';
//    } else if (temperature <= 5) {
//       return 'A stylish down jacket - your best friend during this time.';
//    } else if (temperature <= 10) {
//       return 'Time for light jackets and spring boots!';
//    } else if (temperature <= 15) {
//       return 'A spring jacket and a pair of stylish sunglasses - the perfect combination';
//    } else if (temperature <= 20) {
//       return 'Of course, it\'s time for sneakers, shorts, and T-shirts!';
//    } else if (temperature <= 25) {
//       return 'Definitely just wear what you have on right now, because it\'s the perfect temperature!';
//    } else if (temperature <= 30) {
//       return 'T-shirt and shorts - always a fitting choice!';
//    } else if (temperature <= 40) {
//       return 'Maybe it\'s time to get out the swimsuit or shorts and a shirt?';
//    } else if (temperature <= 50) {
//       return 'Forget about clothes and just splash around in the water!';
//    } else if (temperature > 50) {
//       return 'Well, in such heat, you can probably do without clothes, right?';
//    }
// }

const outputClothesToWear = getClothesToWear(50);
console.log(outputClothesToWear);



