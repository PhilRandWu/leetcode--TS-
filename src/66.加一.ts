/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-15 18:33:56
 * @LastEditTime: 2022-06-15 19:21:06
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
export function plusOne(digits: number[]): number[] {
    // 普通情况下可以，但当超过最大整数限制就会出现问题
    // let delNum = +digits.join('');
    // delNum += 1;
    // let getStr = delNum + ''
    // let strArr = getStr.split('');
    // return strArr.map(item => + item);

    // 优化方案
    let carry = 1;
    let crt = 0

    digits = digits.reverse();

    while(carry) {
        digits[crt] = digits[crt] || 0;
        digits[crt] += carry;
        if(digits[crt] >= 10) {
            carry = 1;
            digits[crt] %= 10;
            crt ++; // 处理下一位
        } else {
            carry = 0; // 不到十，不考虑进位
        }
    }

    if(carry) {
        digits.push(1) // 到最后一位任然要进位，则直接添加一个 1
    }
    return digits.reverse();

};
// @lc code=end

