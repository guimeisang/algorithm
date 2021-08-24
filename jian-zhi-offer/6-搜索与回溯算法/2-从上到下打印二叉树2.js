/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * bfs
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root], res = []
    while(queue.length) {
      const temp = []
      for(let i = queue.length; i > 0; i--) {
        let n = queue.shift()
        temp.push(n.val)
        n.left && queue.push(n.left)
        n.right && queue.push(n.right)
      }
      res.push(temp)
    }
    return res
};