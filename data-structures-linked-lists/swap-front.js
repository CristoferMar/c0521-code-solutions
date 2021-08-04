/* exported swapFront */

function swapFront(list) {
  if (!list.next) return list;
  const newList = new LinkedList(list.next.data);
  newList.next = new LinkedList(list.data);
  newList.next.next = list.next.next;
  list = newList;
  return list;
}
