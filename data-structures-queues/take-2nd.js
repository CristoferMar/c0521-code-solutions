/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (first === undefined) return;
  queue.enqueue(first);
  const second = queue.dequeue();
  if (second === undefined) return queue;
  return second;
}
