const numberOfVowels = function(data) {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "o" || data[i] === "i" || data[i] === "u") {
      string += data[i];
    }
  }
  return string.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));