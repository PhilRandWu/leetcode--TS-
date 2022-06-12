/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-12 20:23:45
 * @LastEditTime: 2022-06-12 20:32:29
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
export function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0) {
        return '';
    }
    return strs.reduce((prev,next) => {
        let i = 0;
        while(prev[i] && next[i] && prev[i] === next[i]) {
            // 当前和下一个的第 i 位相同时, i ++ 找到最大字符串的位置
            i ++;
        }
        return prev.slice(0,i)
         // 从 0 截取到 i 位得到最大字符串，传入下一次的 prev
    })
};
// @lc code=end

