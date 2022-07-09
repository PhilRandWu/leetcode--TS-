/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-09 21:43:15
 * @LastEditTime: 2022-07-09 22:04:03
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
export function maxProfit(prices: number[]): number {
    // let maxValue: number = 0;
    // for(let i = 0; i < prices.length; i ++) {
    //     for(let j = i + 1; j < prices.length; j ++) {
    //         const difference = prices[j] - prices[i];
    //         maxValue = difference > maxValue ? difference : maxValue;
    //     }
    // }
    // return maxValue;


    let minPrice: number = Infinity;
    let maxValue: number = 0;

    for(let i = 0; i < prices.length; i ++) {
        minPrice = minPrice < prices[i] ? minPrice : prices[i];
        const difference = prices[i] - minPrice;
        maxValue = maxValue > difference ? maxValue : difference;
    }
    return maxValue;
};
// @lc code=end

