/* exported getLength */

function getLength(list) {
  let currentNode = list;
  let count = 1;
  while (currentNode.next) {
    currentNode = currentNode.next;
    count++;
  }
  return count;
}
