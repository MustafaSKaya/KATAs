const camelCase = function(input) {
  let desiredStr = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      desiredStr = desiredStr + input[i + 1].toUpperCase();
      i++;
    } else {
      desiredStr = desiredStr + input[i];
    }
  }
  return desiredStr;
};

console.log(camelCase("this is a string")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious