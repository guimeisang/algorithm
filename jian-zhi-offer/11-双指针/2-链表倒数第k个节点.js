/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let left = head, right = head
    while(right) {
      if( k<= 0){
        left = left.next
      }
      right = right.next
      k--
    }
    return left
};