/* exported postpone */

function postpone(queue) {
  const moved = queue.dequeue();
  if (moved === undefined) return;
  queue.enqueue(moved);
}
