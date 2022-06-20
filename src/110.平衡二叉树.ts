/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-20 09:58:56
 * @LastEditTime: 2022-06-20 10:04:57
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    if(root === null) {
        return true;
    }
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};


function getDeep(root: TreeNode | null): number {
    if(!root) {
        return 0;
    }
    let leftDeep = getDeep(root.left);
    let rightDeep = getDeep(root.right);
    return Math.max(leftDeep,rightDeep) + 1;
}
// @lc code=end

