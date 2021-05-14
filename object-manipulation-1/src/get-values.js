/* exported getValues */
function getValues(object) {
  var properties = [];
  for (var keys in object) {
    properties.push(object[keys]);
  }
  return properties;
}
