const urlEncode = function(text) {
  let twentyP = "%20";
  let textA = Array.from(text);
  for (let i = 0; i < textA.length; i++) {
    if (textA[i] === " ") {
      textA.splice(i, 1, twentyP);
    }
  }
  return textA.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));