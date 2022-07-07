/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-06 22:25:10
 * @LastEditTime: 2022-07-07 22:04:23
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root === null) {
        return false;
    } else if(root.left === null && root.right === null) {
        return root.val  === targetSum;
    }
    return hasPathSum(root.left,targetSum - root.val)
    || hasPathSum(root.right, targetSum - root.val);
};
// @lc code=end



//                     5
//         4                       8

//     11                        13      4
// 7      2                                       1




// 1        22    5     left    17   ||    right    17
// 2        17    4     left    13                          8       left    9    
// 3        13    11    left    2    ||    right     2      13      false      4    right   5
// 4        2     7     false   ||  right   2    true         
