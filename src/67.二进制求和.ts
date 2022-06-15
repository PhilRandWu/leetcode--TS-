/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-15 19:22:59
 * @LastEditTime: 2022-06-15 19:51:31
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
export function addBinary(a: string, b: string): string {
    // 先转十进制，再转回二进制
    // 此处使用了 parseInt 转换函数
    // const a10 = parseInt(a,2);
    // const b10 = parseInt(b,2);

    const a10 = two210(a);
    const b10 = two210(b);
    //自定义 2 to 10 

    return ten22(a10 + b10);
};
function two210(numStr: string): number {
    let sum = 0;
    const nums = numStr.split('').reverse();
    for(let i = 0; i < nums.length; i ++) {
        sum += +nums[i] * Math.pow(2,i);
    }
   return sum; 
}


function ten22(target: number): string {
    const arr = [];
    while(target >= 2) {
        arr.push(target % 2);
        target = Math.floor(target / 2);
    }
    arr.push(target);
    return arr.map(item => (item + ''))
    .reverse()
    .join('');
}
// @lc code=end

