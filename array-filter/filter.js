const billing = (array, item, condition) => {
  const match = [];
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    if (condition) {
      match.push(item);
    }
  }
  return match;
};

function array(method) {
  this.method;
}
