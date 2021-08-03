/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const item = queue.dequeue();
    queue.enqueue(item);
  }
  return queue.dequeue();
}
