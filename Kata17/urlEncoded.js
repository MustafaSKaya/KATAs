const urlDecode = function(text) {
    const textArray = text.split("&");
    const resultObject = {};
    for (let value of textArray) {
      let loopArray = value.split("=");
      resultObject[loopArray[0]] = loopArray[1].split("%20").join(" ");
    }
    return resultObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
  

/* 
Expected Outcomes

{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"

*/