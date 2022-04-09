let monthsArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const talkingCalendar = function(date) {
  const splitDate = date.split('/');
  let dateDay = findDay(Number(splitDate[2]));
  let dateMonth = findMonth(Number(splitDate[1]));
  let dateYear = splitDate[0];
  return `${dateMonth} ${dateDay} ${dateYear}`;
};

const findMonth = function(month) {
  return monthsArr[month - 1];
};

const findDay = function(day) {
  let daysPronunciation = '';
  
  if (day === 1 || day === 21 || day === 31) {
    daysPronunciation = day + 'st';
  } else if (day === 2 || day === 22) {
    daysPronunciation = day + "nd";
  } else if (day === 3 || day === 23) {
    daysPronunciation = day + "rd";
  } else {
    daysPronunciation = day + "th";
  };
  
  return daysPronunciation;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));