let arrOfConsonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
let arrOfVowels = ['a','e','o','u','i'];

const makeCase = function(input, cAse) {
  if (cAse === "camel") {
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
  }
  if (cAse === "pascal") {
    let desiredStr = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        desiredStr = desiredStr + input[i + 1].toUpperCase();
        i++;
      } else {
        desiredStr = desiredStr + input[i];
      }
    }
    desiredStr = desiredStr.replace(desiredStr[0], desiredStr[0].toUpperCase());
    return desiredStr;
  }
  if (cAse === "snake") {
    let desiredStr = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        desiredStr = desiredStr + "_" + input[i + 1];
        i++;
      } else {
        desiredStr = desiredStr + input[i];
      }
    }
    return desiredStr;
  }
  if (cAse === "kebab") {
    let desiredStr = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        desiredStr = desiredStr + "-" + input[i + 1];
        i++;
      } else {
        desiredStr = desiredStr + input[i];
      }
    }
    return desiredStr;
  }
  if (cAse === "title") {
    let desiredStr = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        desiredStr = desiredStr + input[i] + input[i + 1].toUpperCase();
        i++;
      } else {
        desiredStr = desiredStr + input[i];
      }
    }
    desiredStr = desiredStr.replace(desiredStr[0], desiredStr[0].toUpperCase());
    return desiredStr;
  }
  if (cAse === "vowel") {
    let desiredStr = "";
    for (let i = 0; i < input.length; i++) {
      if (arrOfVowels.includes(input[i])) {
        desiredStr = desiredStr + input[i].toUpperCase();
      } else {
        desiredStr = desiredStr + input[i];
      }
    }
    return desiredStr;
  }
  if (cAse === "consonant") {
    let desiredStr = "";
    for (let i = 0; i < input.length; i++) {
      if (arrOfConsonants.includes(input[i])) {
        desiredStr = desiredStr + input[i].toUpperCase();
      } else {
        desiredStr = desiredStr + input[i];
      }
    }
    return desiredStr;
  }
  if (cAse[0] === "upper" && cAse[1] === "snake") {
    input = input.toUpperCase();
    let desiredStr = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        desiredStr = desiredStr + "_" + input[i + 1];
        i++;
      } else {
        desiredStr = desiredStr + input[i];
      }
    }
    return desiredStr;
  }
};
console.log(makeCase("this is a string", "camel")); //thisIsAString
console.log(makeCase("this is a string", "pascal")); //ThisIsAString
console.log(makeCase("this is a string", "snake")); //this_is_a_string
console.log(makeCase("this is a string", "kebab")); //this-is-a-string
console.log(makeCase("this is a string", "title")); //This Is A String
console.log(makeCase("this is a string", "vowel")); //thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); //THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); //THIS_IS_A_STRING