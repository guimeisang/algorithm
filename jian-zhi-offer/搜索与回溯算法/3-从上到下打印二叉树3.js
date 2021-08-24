/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * bfs 其实就是在第二道题上变体，加一个判断即可；也就是说题目1和题目2的套路其实可以记住的；
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if(!root) return []
  let queue = [root], res = [], isR
  while(queue.length) {
    const temp = []
    for(let i = queue.length; i > 0; i--) {
      let n = queue.shift()
      temp.push(n.val)
      n.left && queue.push(n.left)
      n.right && queue.push(n.right)
    }
    if(isR) temp.reverse()
    res.push(temp)
    isR != isR
  }
  return res
};