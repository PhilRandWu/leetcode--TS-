/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-12 20:35:34
 * @LastEditTime: 2022-06-12 20:39:04
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
export function isValid(s: string): boolean {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;

            default:
                if(stack.pop() !== s[i]) {
                    return false;
                }
        }
    }
    return stack.length === 0;
};
// @lc code=end

