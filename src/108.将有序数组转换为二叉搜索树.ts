/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-20 09:51:18
 * @LastEditTime: 2022-06-20 09:52:49
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let start = 0;
    let end = nums.length - 1;
    return buildTree(nums, start, end);
};

function buildTree(nums: number[], start: number, end: number): TreeNode | null {
    if (start > end) {
        return null;
    }
    let centerNode = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[centerNode]);
    root.left = buildTree(nums, start, centerNode - 1);
    root.right = buildTree(nums, centerNode + 1, end);
    return root;
}
// @lc code=end

