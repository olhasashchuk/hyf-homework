// 2. When will we be there??
// Write a function where you specify your speed in km/h and how far you have to go in km. The function has to return the time it will take to arrive at your destination. The time should be formatted like this: 3 hours and 34 minutes.

const travelInformation = {
   speed: 50,
   destinationDistance: 432,
 };
 
 function getTimeArrive (travelData) {
   const travelMinutes = travelData.destinationDistance / (travelData.speed/60); // Calculate time in minutes
   console.log(travelMinutes)
   // Calculate hours and minutes
   const hours = Math.floor(travelMinutes / 60);
   const minutes = Math.round(travelMinutes % 60);
   // Return formatted string
   return `${hours} hours and ${minutes} minutes`;
 }
 
 const travelTime = getTimeArrive(travelInformation);
 console.log(travelTime); // 8 hours and 38 minutes
 