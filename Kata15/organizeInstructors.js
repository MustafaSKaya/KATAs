const organizeInstructors = function(instructors) {
  let instObj = {};
  for (let i = 0; i < instructors.length; i++) {
    let name = instructors[i].name;
    let course = instructors[i].course;
    if (course in instObj) {
      instObj[course].push(name);
    } else {
      instObj[course] = [name];
    }
  }
  return instObj;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));