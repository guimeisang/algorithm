/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 思路：广度优先搜索
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root) return []
    const queue = [root], res = []
    while(queue.length) {
      const node = queue.shift()
      res.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    return res
};