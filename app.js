var romanToInt = function (s) {
  const romanDict = {
    I: 1,

    V: 5,

    X: 10,

    L: 50,

    C: 100,

    D: 500,

    M: 1000,
  };
  var result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) {
      result += romanDict[s[i + 1]] - romanDict[s[i]];
      i++;
    } else if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
      result += romanDict[s[i + 1]] - romanDict[s[i]];
      i++;
    } else if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
      result += romanDict[s[i + 1]] - romanDict[s[i]];
      i++;
    } else {
      result += romanDict[s[i]];
    }
  }

  return result;
};
console.log(romanToInt("MCMIII"))