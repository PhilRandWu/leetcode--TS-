/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-13 20:05:53
 * @LastEditTime: 2022-06-13 20:23:39
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
export function searchInsert(nums: number[], target: number): number {
    if (nums.length === 0) {
        return 0;
    }
    return Binary(nums,target,0,nums.length - 1);
};
// 利用二分法
function Binary(nums: number[], target: number, start: number, end: number):number {
    if(start > end) {
        return start;
    }
    let centerPoint = Math.floor((start + end) / 2);
    if(nums[centerPoint] > target) {
        return Binary(nums,target,start,centerPoint - 1);
    } else if(nums[centerPoint] < target) {
        return Binary(nums,target,centerPoint + 1,end);
    } else {
        // 相等
        return centerPoint;
    }

}
// @lc code=end

