/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-13 19:34:52
 * @LastEditTime: 2022-06-13 19:49:09
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
export function removeElement(nums: number[], val: number): number {
    let j = -1;
    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] !== val) {
            nums[++ j] = nums[i];
        }
    }
    return ++ j; // 此处可以这样想 当全都同 val 相等，则为 0 个，只需 ++ j
};
// @lc code=end

// 3 2 2 3

// i   j   nums[i]     val
// 0   -1  3           3       过
// 1   -1  2           3       nums[0] === 2
// 2   0   2           3       nums[1] === 2
// 3   1   3           3       过
// 4
