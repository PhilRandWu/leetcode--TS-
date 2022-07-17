/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-17 21:33:19
 * @LastEditTime: 2022-07-17 21:37:21
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {
    // 第一种写法
    // const result: number[] = [];

    // const findOrder = (node: TreeNode | null) => {
    //     if(node === null) {
    //         return;
    //     }
    //     findOrder(node.left);
    //     findOrder(node.right);
    //     result.push(node.val);
    // }

    // findOrder(root);
    // return result;

    // 第二种写法
    if (root === null) {
        return [];
    }

    return [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val,
    ]
};
// @lc code=end

