// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} node
 * @returns {void} Do not return anything, modify node in-place instead.
 */

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

const node1 = new ListNode(4);
const node2 = new ListNode(5);
const node3 = new ListNode(1);
const node4 = new ListNode(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;

const list = [node1, node2, node3, node4];
const printList = (start) => {
  let current = start;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(' -> '));
};

printList(node1); // 4 -> 5 -> 1 -> 9

deleteNode(node2); // removes selected node (must not target the tail)

printList(node1); // 4 -> 1 -> 9
