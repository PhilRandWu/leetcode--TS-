/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-06-17 16:26:38
 * @LastEditTime: 2022-06-17 16:42:34
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function deleteDuplicates(head:any) {
    if(!head) {
        return null;
    }
    let crt = head;
    while(crt.next) {
        if(crt.val === crt.next.val) {
            crt.next = crt.next.next;
        } else {
            crt = crt.next;
        }
    }
    return head;
};
// @lc code=end

