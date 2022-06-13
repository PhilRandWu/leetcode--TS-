/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
export function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }
    const splits = haystack.split(needle);
    return splits.length > 1 ? splits[0].length : -1;
};
// @lc code=end

// 输入：haystack = "hello", needle = "ll"

// 分割后的 split
// ["he",'o']
// 如果长度大于 1, 则表明可以进行分割 前面的长度即为字符串出现的第一个位置的下标 ，否则不行返回 - 1
