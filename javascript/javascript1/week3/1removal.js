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
   // Loop through the array
   for (let i = 0; i < arr.length; i++) {
     // Check if the current item is equal to the item to be removed
     if (nameToRemove === arr[i]) {
       arr.splice (i, 1) // Remove the item from the array
     }
   }
   return arr
 }

 // Call the function to remove the item
removeItem(names)
console.log(names); // ['Peter', 'Yana', 'Kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']