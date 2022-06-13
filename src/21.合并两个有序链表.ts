/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // // 一.普通方法
    // const mergeHead:ListNode = {
    //     val: -1,
    //     next: null
    // };
    // let crt = mergeHead;
    // while(list1 && list2) {
    //     // 当两个链表都有值时
    //     if(list1.val < list2.val) {
    //         // head 的下一个节点为小的
    //         // list1 变为下一个 list1.next 重新判断
    //         crt.next = list1;
    //         list1 = list1.next;
    //     } else {
    //         crt.next = list2;
    //         list2 = list2.next;
    //     }
    //     crt = crt.next // 一次循环后 crt 向后移动一个
    // }
    // crt.next = list1 || list2; // 链接那个还没有遍历完的
    // return mergeHead.next; // 返回头部节点
    // 二.递归方法
    // 如果一个为空则直接返回另一个即可结束
    if(!list1) {
        return list2;
    }
    if(!list2) {
        return list1;
    }

    if(list1.val < list2.val) {
        // 如果当前的 list1 < list2, 那么他的下一个节点就是 list1 剩余的和 list2 合并
        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
};
// @lc code=end
