/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-12 20:04:47
 * @LastEditTime: 2022-06-12 20:20:50
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
export function romanToInt(s: string): number {
    let value = 0;
    const valueObj: any = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    const symbolArr = s.split('')
    for (let i = 0; i < symbolArr.length; i++) {
        if (valueObj[symbolArr[i]] < valueObj[symbolArr[i + 1]]) {
            // 此处有坑
            // 防止最后一次判断，没有比较的数值，故直接走 else 加上数值即可，而不应将 else 里减去
            value -= valueObj[symbolArr[i]];
        } else {
            value += valueObj[symbolArr[i]];
        } 
    }
    return value;
};
// @lc code=end

