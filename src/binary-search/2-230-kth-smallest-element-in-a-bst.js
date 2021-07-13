// 二叉搜索树中第K小的元素

/**
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 * 下面是用中序的方式解决的
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest (root, k) {
  let res = null
  let inOrderTraverseNode = function (node) {
    if (node !== null && k > 0) {
      // 先遍历左子树
      inOrderTraverseNode(node.left)
      // 根节点
      if (--k === 0) {
        res = node.val
        return
      }
      // 后遍历右子树
      inOrderTraverseNode(node.right)
    }
  }
  inOrderTraverseNode(root)
  return res
}

console.log(111)

export default kthSmallest