//1. Flight booking fullname function

// crate a function which return full name
// function getFullName(firstName, surname) {
//    return `${firstName} ${surname}`
// };
// //exist a function
// console.log(getFullName("Benjamin", "Hughes"));
// //create two variables which assigned to calling getFullName function
// const fullname1 = getFullName("Steve", "Jobs");
// const fullname2 = getFullName("Bill", "Gates");
// //log out two fullname variables
// console.log(fullname1);
// console.log(fullname2);

//Formal fullname

function getFullName(firstName, surname, useFormalName) {
   if (useFormalName) {
      if (firstName && surname) {
         return `Lord ${firstName} ${surname}`;
      } else if (firstName) {
         return `Lord ${firstName}`;
      } else if (surname) {
         return `Lord ${surname}`;
      } else {
         return "Lord";
      }
   } else {
      if(firstName && surname){
         return (firstName + " " + surname);
      } else if (firstName) {
         return firstName;
      } else if (surname) {
         return surname;
      } else {
         return "";
      }
   }   
};

console.log(getFullName("Benjamin", "Hughes", true));
console.log(getFullName("Benjamin", "Hughes", false));
console.log(getFullName("Benjamin", "Hughes"))

//Gender fullname
//1. First V.
function getFullName2(firstName, surname, useFormalName, male, female) {
   if (useFormalName && male) {
      return(`Mr ${firstName} ${surname}`)
   } else if (useFormalName && female){
      return (`Mrs ${firstName} ${surname}`)
   }  else {
      return (firstName + " " + surname)
   } 
};
console.log(getFullName2("Benjamin", "Hughes", true, true, true));
console.log(getFullName2("Merelin", "Hughes", true, false, true))

//2. Second V.
// function getFullName2(firstName, surname, useFormalName, isMale) {
//    const malePrefix = "Mr ";
//    const femalePrefix = "Mrs ";
//    let prefix = "";
//    if (useFormalName) {
//      if (isMale) {
//        prefix = malePrefix;
//      } else {
//        prefix = femalePrefix;
//      }
//    }
//    return `${prefix}${firstName} ${surname}`;
// }
// console.log(getFullName2("Benjamin", "Hughes", true, true));
// console.log(getFullName2("Merelin", "Hughes", true, false));