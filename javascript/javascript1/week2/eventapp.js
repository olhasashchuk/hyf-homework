// 2. Event application
// 1. First version
// function getEventWeekday (numberDay) {
//    // get current day
//    const currentDate = new Date();
//    // get day when event is being held from current day
//    const eventDate = new Date(currentDate.setDate(currentDate.getDate() + numberDay)).getDay();
//    const dayNames = ["Sunday", "Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//    // get name of weekday the event is being held
//    return dayNames[eventDate]  
// }
// console.log(getEventWeekday(3));

// 2. Second version
function getEventWeekday(numberDay) {
   const dayNames = ["Sunday", "Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   // get current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
   const currentDay = new Date().getDay();
   // calculate the index of the event day in the dayNames array using modulo operator
   const eventDay= (currentDay + numberDay) % 7;
   // get the name of the weekday the event is being held
   return dayNames[eventDay];
}
console.log(getEventWeekday(12));