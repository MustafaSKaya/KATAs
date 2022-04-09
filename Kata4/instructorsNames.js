const instructorWithlongestName = function(instructors) {
  let longestName = instructors[0];
  for (let i = 1; i < instructors.length; i ++) {
    if (instructors[i].name.length > longestName.name.length) {
      longestName = instructors[i];
    }
  }
  return longestName;
};

console.log(instructorWithlongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithlongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));