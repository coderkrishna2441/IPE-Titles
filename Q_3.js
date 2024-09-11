// Add two JSON objects having members like hours, minutes and seconds. 
// After addition, if seconds goes beyond 60, then minutes should be incremented and 
// if minutes go beyond 60, then hour should be incremented. 

const time1 = { hours: 1, minutes: 30, seconds: 45 };
const time2 = { hours: 2, minutes: 15, seconds: 30 };

// Calculate total seconds
const totalSeconds = time1.seconds + time2.seconds;

// Calculate total minutes, including carry-over from seconds
const totalMinutes = time1.minutes + time2.minutes + Math.floor(totalSeconds / 60);

// Calculate total hours, including carry-over from minutes
const totalHours = time1.hours + time2.hours + Math.floor(totalMinutes / 60);

// Adjust hours, minutes, and seconds to ensure they are within valid ranges
const result = {
  hours: totalHours % 24,
  minutes: totalMinutes % 60,
  seconds: totalSeconds % 60
};

console.log(result);