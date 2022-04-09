const squareCode = function(message) {
    let messageWithoutSpaces = message.replace(/\s/g, '');
    let squareRootOfMessage = Math.ceil(Math.sqrt(messageWithoutSpaces.length));
  
    let arrayOfmessage = []; 
    for (let i = 0; i < (messageWithoutSpaces.length / squareRootOfMessage); i++) {
      let text = messageWithoutSpaces.slice(squareRootOfMessage * i, squareRootOfMessage * (i + 1));
      arrayOfmessage.push(text);
    }
  
    let result = [];
    let concatenatedString = '';
    let j = 0;
    while(j < squareRootOfMessage) {
      for (let letter of arrayOfmessage) {
        if (letter[j] !== undefined) {
          concatenatedString += letter[j];
        }
      }
      result.push(concatenatedString);
      concatenatedString = '';
      j++;
    }
    return result.join(' ');
};
  
console.log(squareCode("chill out")); //clu hlt io
console.log(squareCode("feed the dog")); //fto ehg ee dd
console.log(squareCode("have a nice day")); //hae and via ecy
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); //imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau