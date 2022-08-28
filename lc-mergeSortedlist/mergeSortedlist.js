var mergeTwoLists = function (list1, list2) {
  var mergedHead = new ListNode();
  mtl = mergedHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      mtl.next = list2;
      list2 = list2.next;
    } else {
      mtl.next = list1;
      list1 = list1.next;
    }
    mtl = mtl.next;
  }
  mtl.next = list1 || list2;
  return mergedHead.next;
};
