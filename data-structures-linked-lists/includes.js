/* exported includes */

function includes(list, value) {
  let currentNode = list;
  while (currentNode.next) {
    if (currentNode.data === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  if (currentNode.data === value) return true;
  return false;
}
