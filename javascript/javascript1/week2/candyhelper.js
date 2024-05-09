//5. Candy helper

const boughtCandyPrices = [];
const arrCandyPrice = [
  { candyType: "sweet", price: 0.5 },
  { candyType: "chocolate", price: 0.7 },
  { candyType: "toffee", price: 1.1 },
  { candyType: "chewing-gum", price: 0.03 },
];

// Function to add candy with its type and weight
function addCandy(candyType, weight) {
  
  // Find the candy price object once, avoiding a nested loop
  // 1. First version
  // let candyPriceInfo;
  // for (let j = 0; j < arrCandyPrice.length; j++) {
  //   if (arrCandyPrice[j].candyType === candyType) {
  //     candyPriceInfo = arrCandyPrice[j];
  //   }
  // }
  // 2. Second version
  let candyPriceInfo = arrCandyPrice.find(candy => candy.candyType === candyType);
    
  // If the candy type exists in the price array, compute and push the new entry
  if (candyPriceInfo) {
    const candyPrice = weight * candyPriceInfo.price;
    boughtCandyPrices.push({ candyType, weight, candyPrice });
  }

  // boughtCandyPrices.push({ candyType, weight });
  // for (let i = 0; i < boughtCandyPrices.length; i++) {
  //   for (let j = 0; j < arrCandyPrice.length; j++) {
  //     if (boughtCandyPrices[i].candyType === arrCandyPrice[j].candyType) {
  //       boughtCandyPrices[i].candyPrice =
  //         boughtCandyPrices[i].weight * arrCandyPrice[j].price;
  //     }
  //   }
  // }
}

addCandy("sweet", 10);
addCandy("chocolate", 20);
addCandy("toffee", 10);
addCandy("chewing-gum", 20);
console.log(boughtCandyPrices);

// Generate a random amount of money available to spend
const amountToSpend = Math.random() * 100;
console.log(`You have available ${amountToSpend.toFixed(2)}`);

// Function to check if more candies can be bought
function canBuyMoreCandy() {
  let totalPrice = 0;
  let i = 0;
  while(i < boughtCandyPrices.length) {
   totalPrice += boughtCandyPrices[i].candyPrice;
   i++;
  }
  console.log(`The total price of candy purchased ${totalPrice}`);
  if (amountToSpend <= totalPrice) {
    console.log("Enough candy for you!");
  } else {
    console.log("You can buy more, so please do!");
  }
}
canBuyMoreCandy();

