/* exported pick */

// store new object for desired properties and values
// check each item in array
// compare it to each porperty in the OG object
// if it exists and if its not undefined
//     store the property with it's value in the new object
//     break subloop
// return new object

function pick(source, keys) {
  var newOjb = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newOjb[keys[i]] = source[prop];
        break;
      }
    }
  }
  return newOjb;
}
