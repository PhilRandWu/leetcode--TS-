/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-17 22:03:13
 * @LastEditTime: 2022-07-17 22:06:00
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    let excelColumn = '';
    let charCode;
    while(columnNumber > 0) {
        charCode = (columnNumber - 1) % 26;
        excelColumn = String.fromCharCode(65 + charCode) + excelColumn;
        columnNumber = (columnNumber - charCode) / 26 | 0;
    }
    return excelColumn;
};
// @lc code=end

