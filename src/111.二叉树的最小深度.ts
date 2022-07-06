/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-20 10:07:35
 * @LastEditTime: 2022-07-06 21:58:34
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    function deep(root: TreeNode | null, level: number): number {
        if (!root.left && !root.right) {
            return level;
        }
        const leftDeep = root.left ? deep(root.left, level + 1) : Infinity;
        const rightDeep = root.right ? deep(root.right, level + 1) : Infinity;
        return Math.min(leftDeep,rightDeep);
    }
    return deep(root, 1);
};
// @lc code=end

