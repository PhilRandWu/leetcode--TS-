/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-09 21:12:39
 * @LastEditTime: 2022-07-09 21:25:20
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II 
 */

// @lc code=start
export function getRow(rowIndex: number): number[] {
    const result: number[][] = new Array(rowIndex + 1)
    .fill(0)
    .map((item,index) => new Array(index + 1)
    .fill(1));

    for(let i = 0; i < rowIndex + 1; i ++) {
        for(let j = 0; j <= i; j ++) {
            if(i === j || j === 0) {
                continue;
            }
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
    }
    return result[rowIndex];
};
// @lc code=end

