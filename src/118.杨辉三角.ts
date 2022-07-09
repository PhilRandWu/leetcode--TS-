/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-09 21:01:12
 * @LastEditTime: 2022-07-09 21:01:12
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
export function generate(numRows: number): number[][] {
    // 对于高阶 map 函数如果是 undefined 会跳过 所以先用 0 填充
        const result = new Array(numRows).fill(0)
        .map((item,index) => new Array(index + 1).fill(1));
        for(let i = 0; i < result.length; i ++) {
            for(let j = 0; j <= i; j ++) {
                // 最开始和结尾位置 不用处理已经 fill 1
                if(i === j || j === 0) {
                    continue;
                }
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
        return result;
};
// @lc code=end

