/* exported countValues */

function countValues(stack) {
  let count = 0;
  const values = [];
  while (stack.peek() !== undefined) {
    values.push(stack.pop());
    count++;
  }
  return count;
}
