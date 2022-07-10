/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-09 22:47:26
 * @LastEditTime: 2022-07-10 10:17:10
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
export function singleNumber(nums: number[]): number {
    // 一.暴力破解
    // 两次 for 循环
    // 二.异或解法
    let ans = nums[0]
    for(let i = 1; i < nums.length; i ++) {
        ans = ans ^ nums[i];
    }
    return ans;
};
// @lc code=end

