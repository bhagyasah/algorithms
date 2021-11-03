const test = {
  "calendar1": [
    ["9:00", "10:30"],
    ["12:00", "13:00"],
    ["16:00", "18:00"]
  ],
  "dailyBounds1": ["9:00", "20:00"],
  "calendar2": [
    ["10:00", "11:30"],
    ["12:30", "14:30"],
    ["14:30", "15:00"],
    ["16:00", "17:00"]
  ],
  "dailyBounds2": ["10:00", "18:30"],
  "meetingDuration": 30
}
function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  // Write your code here.
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  const merdedCalendar = mergeCalendar(updatedCalendar1, updatedCalendar2);
  const flattenedCalendar = flattenCalendar(merdedCalendar);
  const result = getMatchAvailabilities(flattenedCalendar, meetingDuration);
  console.log(result);
  return result;
}

function updateCalendar(calendar, dailyBoud) {
  const updatedCalendar = [['0:00', dailyBoud[0]], ...calendar, [dailyBoud[1], '23:59']];
  const updatedCalendarInMinutes = updatedCalendar.map((arr) => arr.map(timeToMinutes));
  return updatedCalendarInMinutes;
}

function mergeCalendar(calendar1, calendar2) {
  const mergedCalendar = [];
  let i = 0;
  let j = 0;
  while(i < calendar1.length && j < calendar2.length) {
    let meeting1 = calendar1[i];
    let meeting2 = calendar2[j];

    if (meeting1[0] < meeting2[0]) {
      mergedCalendar.push(meeting1);
      i++
    } else {
      mergedCalendar.push(meeting2);
      j++
    }
  }

  while(i < calendar1.length) {
    mergedCalendar.push(calendar1[i]);
    i++
  }

  while(j < calendar2.length) {
    mergedCalendar.push(calendar2[j]);
    j++
  }
  return mergedCalendar;
}

function flattenCalendar(calendar) {
  console.log(calendar);
  const flattened = [calendar[0].slice()];
  for (let i = 1; i < calendar.length; i++) {
    const currentMeeting = calendar[i];
    const previousMeeting = flattened[flattened.length - 1];
    const [currentStart, currentEnd] = currentMeeting;
    const [prevStart, prevEnd] = previousMeeting;
    if (prevEnd >= currentStart) {
      const newPreviousMeeting = [prevStart, Math.max(prevEnd, currentEnd)];
      flattened[flattened.length - 1] = newPreviousMeeting;
    } else {
      flattened.push(currentMeeting.slice())
    }
  }
  return flattened;
}

function getMatchAvailabilities(calendar, meetingDuration) {
  const matchAvailabilities = [];
  for(let i=1; i<calendar.length; i++) {
    const start = calendar[i-1][1];
    const end = calendar[i][0];
    const availabilityDuration = end - start;
    if (availabilityDuration >= meetingDuration) {
      matchAvailabilities.push([start, end])
    }
  }
  const matchAvailabiliteisInTimeDuration = matchAvailabilities.map((a) => a.map(minutesToTime));
  return matchAvailabiliteisInTimeDuration;
}

function timeToMinutes(time) {
  const timesInt = time.split(':').map(e => parseInt(e));
  const minutesTime = (timesInt[0] * 60) + (timesInt[1])
  return minutesTime;
}

function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const houresString = hours.toString();
  const minsString = mins < 10 ? '0' + mins.toString() : mins.toString();
  return houresString + ':' + minsString;
}

calendarMatching(test.calendar1, test.dailyBounds1, test.calendar2, test.dailyBounds2, test.meetingDuration);
