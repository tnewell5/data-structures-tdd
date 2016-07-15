// takes in a string and returns true of the opening bracket has a corresponding closing, false otherwise
// for example: checkMatch('[()]') should return true
// checkMatch('[)]') should return false
var Algorithms;

Algorithms = {
  checkMatch: function(string) {
    if ('') return true;
    if (string.length % 2 !== 0) return false;

    var prens = [], brackets = [];
    for (var i = 0; i < string.length; i += 1) {
      if (string[i] === '(' || string[i] === ')') prens.push(string[i]);
      if (string[i] === '[' || string[i] === ']') brackets.push(string[i]);
    }

    if (prens.length % 2 !== 0 || brackets.length % 2 !== 0) return false;

    for (var p = 0; p < prens.length; p += 1) {
      if (prens[p] === prens[p + 1] || prens[0] === ')') return false;
    }
    for (var b = 0; b < brackets.length; b += 1) {
      if (brackets[b] === brackets[b + 1] || brackets[0] === ']') return false;
    }
    return true;
  }
};

module.exports = Algorithms;
