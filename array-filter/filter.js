const filter = (array, condition) => {
  const match = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (condition(item)) {
      match.push(item);
    }
  }
  return match;
};
