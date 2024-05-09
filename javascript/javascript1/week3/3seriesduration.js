//3. Series duration of my life
const seriesDurations = [
   {
     title: "Sex and the City",
     days: 1,
     hours: 15,
     minutes: 10,
   },
   {
     title: "Desperate Housewives",
     days: 5,
     hours: 8,
     minutes: 17,
   },
   {
     title: "Friends",
     days: 3,
     hours: 14,
     minutes: 32,
   },
 ];
 
 function logOutSeriesText() {
   let averageLifespan = 80;
   let averageLifespanMinutes = averageLifespan * 365 * 24 * 60;
   let totalPercentage = 0; 
   // Function to calculate the percentage of life spent watching series
   const seriesDurationsInPercentage = seriesDurations.map(series => {
     const totalMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes; //calculate series durations in minutes
     const percentage = (totalMinutes / averageLifespanMinutes) * 100; //calculate percentage of series durations of life
     //return new array with percentage of lifespan 
     return { 
       title: series.title,
       percentageOfLifespan: percentage
     };
   });
 
   //log out output for each series
   seriesDurationsInPercentage.forEach (series => {
     console.log(`${series.title} took ${series.percentageOfLifespan.toFixed(2)} % of my life`);
     totalPercentage += series.percentageOfLifespan //calculate total lifespan's percentage of life
   })
   
   //log out output for total lifespan's percentage of life
   console.log(`In total that is ${totalPercentage.toFixed(2)} % of my life`)
   
 }
 
 logOutSeriesText()