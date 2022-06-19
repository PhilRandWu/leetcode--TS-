/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-19 19:44:08
 * @LastEditTime: 2022-06-19 19:44:08
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) {
        return true;
    }
    return Symmetrytree(root.left,root.right)
};

function Symmetrytree(root1: TreeNode | null,root2: TreeNode | null): boolean {
    if(!root1 && !root2) {
        return true;
    }
    if(!root1 && root2 || root1 && !root2) {
        return false;
    }
    if(root1.val !== root2.val) {
        return false;
    }
    return Symmetrytree(root1.left,root2.right) && Symmetrytree(root1.right,root2.left);
}
// @lc code=end

