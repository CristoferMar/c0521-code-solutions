/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const top = stack.pop();
  const second = stack.peek();
  if (second === undefined) {
    stack.push(top);
    return second;
  }
  stack.push(top);
  return second;
}
