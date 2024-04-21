//1. Age-ify (A future age calculator)
const yearOfBirth = 1986;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//2. Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
   console.log ("Your dog will be " + dogYear*7 + " dog years old in " + dogYearFuture)
} {
   console.log ("Your dog will be " + dogYear + " human years old in " + dogYearFuture)
}

//3. Housey pricey (A house price estimator)
//Peter's house: 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. 
//Julia's house: 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.
let wideHouse = prompt('What is your hourse wide?');
let deepHouse = prompt('What is your hourse deep?');
let highHouse = prompt('What is your hourse high?');
let gardenSizeInM2 = prompt('What is your garden size in m2?');
let priceHouseAd = prompt('What is your houses\'s price?');
const volumeInMeters = wideHouse*deepHouse*highHouse; 
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(priceHouseAd>housePrice) {
   alert ("The real price for this house is " + housePrice + ". You will pay too much for this house.")
} {
   alert ("The real price for this house is " + housePrice + ". You will pay too little for this house.")
}

//4. Ez Namey (Startup name generator)
firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Global", "Tech", "Bright", "NexGen", "Smart", "Fusion"]
secondWords = ["Solutions", "Hub", "Labs", "Forge", "Wave", "Space", "Works", "Growth", "Edge", "Pulse"]
const randomNumber = Math.floor(Math.random() * 10);
const nameStartup = firstWords[randomNumber] + " " + secondWords[randomNumber];
const lengthNameStartup = nameStartup.length-1;
console.log ("The startup: \"" + nameStartup + "\" contains " + lengthNameStartup + " characters.")
