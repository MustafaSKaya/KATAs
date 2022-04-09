let sumLargestNumbers = function(content) {
  let n1 = 0;
  let n2 = 0;

  for (let i = 0; i < content.length; i++) {
    if (content[i] > n1) {
      n1 = content[i];
    }
  }
  for (let i = 0; i < content.length; i++) {
    if (content[i] > n2 && content[i] < n1) {
      n2 = content[i];
    }
  }
  return n1 + n2;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));