// 1. Item array removal
//Remove the item in names that is equal to nameToRemove

const names = [
   "Peter",
   "Ahmad",
   "Yana",
   "Kristina",
   "Rasmus",
   "Samuel",
   "Katrine",
   "Tala",
 ];
 const nameToRemove = "Ahmad";
 function removeItem(arr) {
  const newArr = arr.filter(name => name !== nameToRemove)
  return newArr
 }

 // Call the function to remove the item
const newNames = removeItem(names)
console.log(newNames); // ['Peter', 'Yana', 'Kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']