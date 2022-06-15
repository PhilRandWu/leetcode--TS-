/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-15 19:56:19
 * @LastEditTime: 2022-06-15 20:03:34
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
export function mySqrt(x: number): number {
    // 利用二分法优化效率
    let start = 0;
    let end = Math.floor(Math.sqrt(x));
    while(start < end) {
        let centerPoint = Math.floor((start + end) / 2);
        if(centerPoint ** 2 === x) {
            return centerPoint;
        } else if(centerPoint ** 2 < x) {
            start = centerPoint + 1;
        } else {
            end = centerPoint - 1;
        }
    }

    return start;
};
// @lc code=end

