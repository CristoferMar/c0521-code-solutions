/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var props in object) {
    keys.push(props);
  }
  return keys;
}
