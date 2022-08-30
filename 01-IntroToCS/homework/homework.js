'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  for (let i = 0; i < num.toString().length; i++) {
    decimal = decimal + parseInt(num.toString()[num.toString().length - (i + 1)]) * (2**i);
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = [];
  while (num >= 1) {
    bin.unshift(num%2);
    num = Math.floor(num / 2);
  }
  return bin.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}