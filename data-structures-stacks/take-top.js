/* exported takeTop */

function takeTop(stack) {
  if (!stack.peek) {
    return undefined;
  }
  return stack.pop();
}
