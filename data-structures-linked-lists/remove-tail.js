/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;
  let currentNode = list;
  while (currentNode.next.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = null;
}
