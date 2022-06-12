/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-12 19:18:03
 * @LastEditTime: 2022-06-12 19:47:24
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    // 一.暴力破解法
    // for(let i = 0; i < nums.length; i ++) {
    //     for(let j = 1; j < nums.length && i !== j; j ++) {
    //         if(nums[i] + nums[j] === target) {
    //             return [j,i]
    //         }
    //     }
    // }
    // return [];
    // 二.巧用 map 法
    const map = new Map();
    for(let i = 0; i < nums.length; i ++) {
        let needSearch = target - nums[i]; // 先求出减去当前数值的值，查找是否有该值
        if(map.has(needSearch)) { // 如果 needSearch 的值存在于 map 中
            return [map.get(needSearch),i]; // 返回 needSearch 对应的键的 value (即下标)  
        }
        map.set(nums[i],i) // 设置以当前值为 key, 下标为 value 的 map
    }
    return [];

    // nums = [3,2,4], target = 6
    // needSearch  map  key  value
    //     3             3     0
    //     4             2     1
    //     2             4     2
};
// @lc code=end

