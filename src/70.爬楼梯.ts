/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-17 15:55:21
 * @LastEditTime: 2022-06-17 16:18:46
 * @LastEditors: PhilRandWu
 */


/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */


// @lc code=start
const cache: number[] = [];
export function climbStairs(n: number): number {
    // 解决方法
    // if (n === 1) {
    //     return 1;
    // }
    // if (n === 2) {
    //     return 2;
    // }
    // return climbStairs(n - 1) + climbStairs(n - 2);
    // 防止计算时间过长,优化效率

    if (n <= 2) {
        return n;
    }
    if (!cache[n]) {
        cache[n] = climbStairs(n - 2) + climbStairs(n - 1);
    }
    return cache[n];
};
// @lc code=end

