/* exported omit */

// clone object and store it
// check each itam in the array
// remove it from the edited object
// return edited object

function omit(source, keys) {
  var trimObj = Object.assign({}, source);
  for (var i = 0; i < keys.length; i++) {
    delete trimObj[keys[i]];
  }
  return trimObj;
}
