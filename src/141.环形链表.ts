/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-07-17 20:58:23
 * @LastEditTime: 2022-07-17 21:01:21
 * @LastEditors: PhilRandWu
 */
/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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


function hasCycle(head: ListNode | null): boolean {
    if(head === null) {
        return false;
    }
    let fast = head.next; 
    let slow = head; 
    while(fast && fast.next) {
        if(fast.next.next === slow.next) { 
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};
// @lc code=end

