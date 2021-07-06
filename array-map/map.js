function map(array, transform) {
  const modArray = [];
  for (let i = 0; i < array.length; i++) {
    const modItem = array[i];
    modArray.push(transform(modItem));
  }
  return modArray;
}
