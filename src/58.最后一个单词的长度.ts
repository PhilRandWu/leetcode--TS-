/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-15 18:23:11
 * @LastEditTime: 2022-06-15 18:31:28
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
export function lengthOfLastWord(s: string): number {
    // 第一种解法
    // const splitArr = s.trim().split(' ').reverse();
    // return splitArr[0].length;
    // 第二种
    const split = s.split(' ').filter(v => v);
    const word = split[split.length - 1];
    return word ? word.length : 0;
};
// @lc code=end

