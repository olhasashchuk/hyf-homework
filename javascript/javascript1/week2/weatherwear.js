// 3. Weather wear
function getClothesToWear(temperature) {
   switch(true) {
     case temperature <= -50:
        return 'It\'s time to bust out the airtight spacesuit! Don\'t forget warm socks.';
     case temperature <= -30:
        return 'Layer up like Russian nesting dolls!';
     case temperature <= -20:
        return 'It\'s time for your favorite fur coat and, of course, ear muffs';
     case temperature <= -10:
        return 'Definitely bundle up in layers like an onion - keep warm!';
     case temperature <= -5:
        return 'Grab a thick jacket, but don\'t forget about style. Winter is still a fashionable season!';
     case temperature <= 0:
        return 'Who says a jacket and scarf can\'t be stylish accessories?';
     case temperature <= 5:
        return 'A stylish down jacket - your best friend during this time.';
     case temperature <= 10:
        return 'Time for light jackets and spring boots!';
     case temperature <= 15:
        return 'A spring jacket and a pair of stylish sunglasses - the perfect combination';
     case temperature <= 20:
        return 'Of course, it\'s time for sneakers, shorts, and T-shirts!';
     case temperature <= 25:
        return 'Definitely just wear what you have on right now, because it\'s the perfect temperature!';
     case temperature <= 30:
        return 'T-shirt and shorts - always a fitting choice!';
     case temperature <= 40:
        return 'Maybe it\'s time to get out the swimsuit or shorts and a shirt?';
     case temperature <= 50:
        return 'Forget about clothes and just splash around in the water!';         
     case temperature > 50:
        return 'Well, in such heat, you can probably do without clothes, right?';
   }
}

const clothesToWear = getClothesToWear(23);
console.log(clothesToWear);