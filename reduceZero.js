var numberOfSteps = function (num) {
  var result = 0;
  while (num != 0) {
    if (num % 2 == 0) {
      num = num / 2;
      result += 1;
    } else {
      num = num - 1;
      result += 1;
    }
  }
  return result;
};

console.log(numberOfSteps(8));
