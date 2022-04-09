const talkingCalendar = function(date) {
  // Your code here
  let dateDay = findDay(date);
  let dateMonth = findMonth(date);
  let dateYear = findYear(date);
  return `${dateMonth} ${dateDay} ${dateYear}`;
};


const findYear = function(year) {
  let yearArr = [];
  for (let j = 0; j < 4; j++) {
    yearArr.push(year[j]);
  }
  return yearArr.join('');
};

const findMonth = function(month) {
  let monthArr = [];
  let monthNum = 0;
  for (let j = 5; j <= 6; j++) {
    monthArr.push(month[j]);
  }
  monthNum = monthArr.join("");
  monthNum = Number(monthNum);
  if (monthNum === 1) {
    monthNum = "January";
  } else if (monthNum === 2) {
    monthNum = "February";
  } else if (monthNum === 3) {
    monthNum = "March";
  } else if (monthNum === 4) {
    monthNum = "April";
  } else if (monthNum === 5) {
    monthNum = "May";
  } else if (monthNum === 6) {
    monthNum = "June";
  } else if (monthNum === 7) {
    monthNum = "July";
  } else if (monthNum === 8) {
    monthNum = "August";
  } else if (monthNum === 9) {
    monthNum = "September";
  } else if (monthNum === 10) {
    monthNum = "October";
  } else if (monthNum === 11) {
    monthNum = "November";
  } else if (monthNum === 12) {
    monthNum = "December";
  }
  return monthNum;
};

const findDay = function(day) {
  let dayArr = [];
  let daysPronunciation = '';
  for (let j = 8; j <= 9; j++) {
    dayArr.push(day[j]);
  }
  daysPronunciation = dayArr.join('');
  daysPronunciation = Number(daysPronunciation);
  if (daysPronunciation == 1 || daysPronunciation == 21 || daysPronunciation == 31) {
    daysPronunciation = daysPronunciation + 'st';
  } else if (daysPronunciation == 2 || daysPronunciation == 22) {
    daysPronunciation = daysPronunciation + "nd";
  } else if (daysPronunciation == 3 || daysPronunciation == 23) {
    daysPronunciation = daysPronunciation + "rd";
  } else {
    daysPronunciation = daysPronunciation + "th";
  }
  return daysPronunciation;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));