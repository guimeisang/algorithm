function deleteNode(head, val) {
  if(head.val === val) return head.next
  let pre = head, cur = head.next
  while(cur) {
    if(cur.val === val) {
      pre.next = cur.next
      return head
    }
    pre = cur
    cur = cur.next
  }
  return head
}