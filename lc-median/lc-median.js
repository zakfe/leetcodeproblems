var nums1 = [3];
var nums2 = [-2,-1];

var findMedianSortedArrays = function (nums1, nums2) {
  var newA = nums1.concat(nums2);
  var newArr = newA.sort(function (a, b) {
      return a - b;
  })
  if (newArr.length % 2 == 0) {
    median = (newArr[newArr.length / 2- 1] + newArr[newArr.length / 2]) / 2;
  } else {
    console.log(newArr)
    median = newArr[Math.floor(newArr.length / 2)];
  }
  return median;
};

console.log(findMedianSortedArrays(nums1, nums2));


a = 3 + 5/2 | 1

console.log(a)