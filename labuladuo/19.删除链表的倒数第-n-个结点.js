/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let empty_node = new ListNode(-1)
  empty_node.next = head
  let p_slow = empty_node, p_fast = empty_node
  for(let i = 0; i <= n; i++) p_fast = p_fast.next
  while(p_fast){
      p_fast = p_fast.next
      p_slow = p_slow.next
  }
  p_slow.next = p_slow.next.next
  return empty_node.next
};
// @lc code=end

