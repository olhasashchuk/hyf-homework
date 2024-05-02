//1. Flight booking fullname function

// crate a function which return full name
// function getFullname(firstname, surname) {
//    return `${firstname} ${surname}`
// };
// //exist a function
// console.log(getFullname("Benjamin", "Hughes"));
// //create two variables which assigned to calling getFullname function
// const fullname1 = getFullname("Steve", "Jobs");
// const fullname2 = getFullname("Bill", "Gates");
// //log out two fullname variables
// console.log(fullname1);
// console.log(fullname2);

//Formal fullname

function getFullname(firstname, surname, useFormalName) {
   if (useFormalName) {
      if (firstname && surname) {
         return `Lord ${firstname} ${surname}`;
      } else if (firstname) {
         return `Lord ${firstname}`;
      } else if (surname) {
         return `Lord ${surname}`;
      } else {
         return "Lord";
      }
   } else {
      if(firstname && surname){
         return `${firstname} ${surname}`;
      } else if (firstname) {
         return firstname;
      } else if (surname) {
         return surname;
      } else {
         return "";
      }
   }   
};

console.log(getFullname("Benjamin", "Hughes", true));
console.log(getFullname("Benjamin", "Hughes", false));
console.log(getFullname("Benjamin", "Hughes"))

//Gender fullname
function getFullname2(firstname, surname, useFormalName, male, female) {
   if (useFormalName && male) {
      return(`Mr ${firstname} ${surname}`)
   } else if (useFormalName && female){
      return (`Mrs ${firstname} ${surname}`)
   }  else {
      return (`${firstname} ${surname}`)
   } 
};

console.log(getFullname2("Benjamin", "Hughes", true, true, false));
console.log(getFullname2("Merelin", "Hughes", true, false, true));