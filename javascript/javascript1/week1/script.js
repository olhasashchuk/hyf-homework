//1. Age-ify (A future age calculator)
const yearOfBirth = 1986;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

//2. Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
let yearType;
if (shouldShowResultInDogYears) {
   yearType = "dog years";
   dogYear *= 7;
} else {
   yearType = "human years";
}
console.log ("Your dog will be " + dogYear + " " + yearType + " old in " + dogYearFuture)

//3. Housey pricey (A house price estimator)
let payResult;
//Peter's house: 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. 
const wideHousePeter = 8;
const deepHousePeter = 10;
const highHousePeter = 10;
const gardenSizeInM2Peter = 100;
const priceHouseAdPeter = 2500000;
const volumeInMetersPeter = wideHousePeter * deepHousePeter * highHousePeter; 
const housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
if (priceHouseAdPeter > housePricePeter) {
   payResult = "much";
   housePricePeter;
} else {
   payResult = "little";
}
console.log (`The real price for this house is ${housePricePeter}. You will pay too ${payResult} for this house.`)

//Julia's house: 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.
const wideHouseJulia = 5;
const deepHouseJulia = 11;
const highHouseJulia = 8;
const gardenSizeInM2Julia = 70;
const priceHouseAdJulia = 1000000;
const volumeInMetersJulia = wideHouseJulia * deepHouseJulia * highHouseJulia; 
const housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
if (priceHouseAdJulia > housePriceJulia) {
   payResult = "much";
   housePriceJulia;
} else {
   payResult = "little";
}
console.log (`The real price for this house is ${housePriceJulia}. You will pay too ${payResult} for this house.`)

//4. Ez Namey (Startup name generator)
const firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Global", "Tech", "Bright", "NexGen", "Smart", "Fusion"];
const secondWords = ["Solutions", "Hub", "Labs", "Forge", "Wave", "Space", "Works", "Growth", "Edge", "Pulse"];
const randomNumber = Math.floor(Math.random() * 10);
const nameStartup = firstWords[randomNumber] + " " + secondWords[randomNumber];
const lengthNameStartup = nameStartup.length - 1;
console.log (`The startup: "${nameStartup}" contains ${lengthNameStartup} characters.`)