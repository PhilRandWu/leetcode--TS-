/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-12 19:54:17
 * @LastEditTime: 2022-06-12 19:59:11
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
export function isPalindrome(x: number): boolean {
    // 一.利用数组 reverse 反转再 join
    let judgeString = x + ''; // 先统一转换为一个字符串
    let reverseString = judgeString
    .split('')
    .reverse()
    .join(''); // 先切得到数组，再反转拼接
    if(judgeString === reverseString) {
        return true;
    }
    return false;
};
// @lc code=end

