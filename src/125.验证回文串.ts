/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-09 22:15:01
 * @LastEditTime: 2022-07-09 22:30:39
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
export function isPalindrome(s: string): boolean {
    const leftString: string= s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
   const rightString: string = leftString.split('').reverse().join('');
   return leftString === rightString;
};
// @lc code=end

