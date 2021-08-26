/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
  if(!root) return root
  dfs(root)
  return root
};

var dfs = function(node) {
  // 递归结束条件
  if(!node.left && !node.right) return

  // 替换
  let temp = node.right
  node.right = node.left
  node.left = temp

  // 递进
  node.left && dfs(node.left)
  node.right && dfs(node.right)
}