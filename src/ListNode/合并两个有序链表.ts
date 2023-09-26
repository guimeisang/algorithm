// 本题可以使用递归来解，将两个链表表头部较小的一个与剩下的元素合并
// 并返回排好序的链表头，当两条链表中的一条为空时终止递归

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if(l1 === null) return l2
  if(l2 === null) return l1
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}