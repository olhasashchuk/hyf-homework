// 2. Event application

function getEventWeekday (numberDay) {
   // get current day
   const currentDate = new Date();
   // get day when event is being held from current day
   const eventDate = new Date(currentDate.setDate(currentDate.getDate() + numberDay)).getDay();
   const dayNames = ["Sunday", "Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   // get name of weekday the event is being held
   return dayNames[eventDate]  
}
console.log(getEventWeekday(3));