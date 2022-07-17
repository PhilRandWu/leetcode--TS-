/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-17 21:17:28
 * @LastEditTime: 2022-07-17 21:29:21
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
    // 第一种方法
    // const result: number[] = [];

    // const findOrder = (node: TreeNode | null) => {
    //     if(node === null) {
    //         return;
    //     }
    //     result.push(node.val);
    //     findOrder(node.left);
    //     findOrder(node.right);
    // }

    // findOrder(root);

    // return result;

    // 第二种方法
    if(root === null) {
        return [];
    }

    return [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
    ]
};


// @lc code=end

