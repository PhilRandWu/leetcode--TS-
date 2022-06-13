/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-13 18:55:44
 * @LastEditTime: 2022-06-13 19:09:57
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
export function removeDuplicates(nums: number[]): number {
    let j = 0;
    for(let i = 1; i < nums.length; i ++) {
        if(nums[j] !== nums[i]) {
            nums[++j] = nums[i];
        }
    }
    return ++ j;
};
// @lc code=end


// j   i   nums[j]   nums[i]
// 0   1     1         1       过
// 0   2     1         2       nums[1] = nums[2]
// 返回 ++ j ,从索引 0 开始, 但是此处要长度

