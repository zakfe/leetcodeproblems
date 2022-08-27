var l1 = [3,5];
var l2 = [4,5];

var addTwoNumbers = function (l1, l2) {
  var result = 0;
  l1_rev = parseInt(l1.reverse().join(""));

  l2_rev = parseInt(l2.reverse().join(""));

  result = l1_rev + l2_rev;
  console.log(result)

  var myArr = String(result)
    .split("")
    .map((result) => {
      return Number(result);
    });

  myArr_rev = parseInt(myArr.reverse().join(""));
  return myArr_rev;
};

console.log(addTwoNumbers(l1, l2));
