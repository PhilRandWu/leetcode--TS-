/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
export function maxSubArray(nums: number[]): number {
    let local = 0;
    let max = -Infinity;

    for(let i = 0;i < nums.length; i ++) {
        // 如果当前数大于前面的数和，那么会丢弃掉前面数之和，否则继续累加
        local = Math.max(nums[i],local + nums[i]);
        if(local > max) {
            max = local;
        }
    }
    return max;
};
// @lc code=end

// -2 1 -3 4 -1 2 1 -5 4

// // local   max
// -2         -2
// 1           1
// 1           1
// 4           4
// 3           3
// 5           5
// 6           6

