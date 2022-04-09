let arrOfConsonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
let arrOfVowels = ['a','e','o','u','i'];

const makeCase = function(input, _case) {
  if (_case === "camel") {
    return camelCase(input);
  }
  if (_case === "pascal") {
    return pascalCase(input);
  }
  if (_case === "snake") {
    return snakeCase(input);
  }
  if (_case === "kebab") {
    return kebabCase(input);
  }
  if (_case === "title") {
    return titleCase(input);
  }
  if (_case === "vowel") {
    return upTheVowels(input);
  }
  if (_case === "consonant") {
    return upTheConsonants(input);
  }
  if (_case[0] === "upper" && _case[1] === "snake") {
    return upperSnake(input);
  }
};

const camelCase = (sentence) => {
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      desiredStr = desiredStr + sentence[i + 1].toUpperCase();
      i++;
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  return desiredStr;
};

const pascalCase = (sentence) => {
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      desiredStr = desiredStr + sentence[i + 1].toUpperCase();
      i++;
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  desiredStr = desiredStr.replace(desiredStr[0], desiredStr[0].toUpperCase());
  return desiredStr;
};

const snakeCase = (sentence) => {
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      desiredStr = desiredStr + "_" + sentence[i + 1];
      i++;
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  return desiredStr;
};

const upperSnake = (sentence) => {
  sentence = sentence.toUpperCase();
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      desiredStr = desiredStr + "_" + sentence[i + 1];
      i++;
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  return desiredStr;
};

const kebabCase = (sentence) => {
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      desiredStr = desiredStr + "-" + sentence[i + 1];
      i++;
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  return desiredStr;
};

const titleCase = (sentence) => {
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      desiredStr = desiredStr + sentence[i] + sentence[i + 1].toUpperCase();
      i++;
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  desiredStr = desiredStr.replace(desiredStr[0], desiredStr[0].toUpperCase());
  return desiredStr;
};

const upTheVowels = (sentence) => {
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (arrOfVowels.includes(sentence[i])) {
      desiredStr = desiredStr + sentence[i].toUpperCase();
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  return desiredStr;
};

const upTheConsonants = (sentence) => {
  let desiredStr = "";
  for (let i = 0; i < sentence.length; i++) {
    if (arrOfConsonants.includes(sentence[i])) {
      desiredStr = desiredStr + sentence[i].toUpperCase();
    } else {
      desiredStr = desiredStr + sentence[i];
    }
  }
  return desiredStr;
};
 
console.log(makeCase("this is a string", "camel")); //thisIsAString
console.log(makeCase("this is a string", "pascal")); //ThisIsAString
console.log(makeCase("this is a string", "snake")); //this_is_a_string
console.log(makeCase("this is a string", "kebab")); //this-is-a-string
console.log(makeCase("this is a string", "title")); //This Is A String
console.log(makeCase("this is a string", "vowel")); //thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); //THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); //THIS_IS_A_STRING