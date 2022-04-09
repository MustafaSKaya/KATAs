const calculateChange = function(total, cash) {
  const Penny = 1;
  const Nickel = 5;
  const Dime = 10;
  const quarter = 25;
  const oneDollar = 100;
  const twoDollar = 200;
  const fiveDollars = 500;
  const tenDollars = 1000;
  const twentyDollars = 2000;
  let remainder = cash - total;
  let remainObj = {};
  if (remainder / twentyDollars >= 1) {
    remainObj.twentyDollars = Math.floor(remainder / twentyDollars);
    remainder -= Math.floor(remainder / twentyDollars) * twentyDollars;
  }
  if (remainder / tenDollars >= 1) {
    remainObj.tenDollars = Math.floor(remainder / tenDollars);
    remainder -= Math.floor(remainder / tenDollars) * tenDollars;
  }
  if (remainder / fiveDollars >= 1) {
    remainObj.fiveDollars = Math.floor(remainder / fiveDollars);
    remainder -= Math.floor(remainder / fiveDollars) * fiveDollars;
  }
  if (remainder / twoDollar >= 1) {
    remainObj.twoDollar = Math.floor(remainder / twoDollar);
    remainder -= Math.floor(remainder / twoDollar) * twoDollar;
  }
  if (remainder / oneDollar >= 1) {
    remainObj.oneDollar = Math.floor(remainder / oneDollar);
    remainder -= Math.floor(remainder / oneDollar) * oneDollar;
  }
  if (remainder / quarter >= 1) {
    remainObj.quarter = Math.floor(remainder / quarter);
    remainder -= Math.floor(remainder / quarter) * quarter;
  }
  if (remainder / Dime >= 1) {
    remainObj.Dime = Math.floor(remainder / Dime);
    remainder -= Math.floor(remainder / Dime) * Dime;
  }
  if (remainder / Nickel >= 1) {
    remainObj.Nickel = Math.floor(remainder / Nickel);
    remainder -= Math.floor(remainder / Nickel) * Nickel;
  }
  if (remainder / Penny >= 1) {
    remainObj.Penny = Math.floor(remainder / Penny);
    remainder -= Math.floor(remainder / Penny) * Penny;
  }
  return remainObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/