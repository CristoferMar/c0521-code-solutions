/* exported maxValue */

function maxValue(stack) {
  if (!stack.peek()) {
    return -Infinity;
  }
  let largest = stack.pop();
  while (stack.peek() !== undefined) {
    const current = stack.pop();
    if (current > largest) {
      largest = current;
    }
  }
  return largest;
}
