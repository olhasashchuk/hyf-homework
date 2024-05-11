// CactusIO-interactive (Smart phone usage app)

const activities = [];
//Adding an activity

function addActivity(date, activity, duration) {
  const currentDate = new Date().toLocaleDateString("en-GB");//automatically figures out what the date is
  if (!date) {
    activities.push( {date: currentDate, activity, duration} )
  } else {
    activities.push( {date, activity, duration} )
  }
}

addActivity(undefined, 'LinkedIn', 20);
addActivity(undefined, 'Slack', 20);
addActivity(undefined, 'Gmail', 10);
addActivity("09/05/2024", 'LinkedIn', 35);
addActivity("09/05/2024", 'Slack', 50);
addActivity("09/05/2024", 'Gmail', 70);
console.log(activities)

//Show my status + usage limit
let limitDuration = 90;
let totalDuration = 0;
function showStatus(arr, day){
  const activitiesForDay = arr.filter(activity => activity.date === day)
  activitiesForDay.forEach(activity => { totalDuration += activity.duration }) //calculate the total number of minutes spent using the phone
  if (activitiesForDay.length === 0) {
    console.log("Add some activities before calling showStatus")
  } else if (activitiesForDay.length > 0 && totalDuration >= limitDuration) {
    console.log("You have reached your limit for this day, no more smartphoning for you!")
  } else {
    console.log(`You have added ${activitiesForDay.length} activities on ${day}. They amount to ${totalDuration} min. of usage for this day`)
  }
}
showStatus(activities, "09/05/2024");

//Get activities by name
function getActivity(activity) {
  return activities.filter(item => item.activity === activity)
}

const activityName = getActivity('Slack');
console.log(activityName);

//Create a function for calculating the activity a user has spent the most time on.

function getMostDuration() {
  let maxActivity = null;
  let maxDuration = 0;
  activities.forEach(activity => {
    if(activity.duration > maxDuration) {
      maxActivity = activity;
      maxDuration = activity.duration
    }
  })
  console.log (`You spent the most time ${maxDuration} min. on the ${maxActivity.activity}`)
}

getMostDuration()


