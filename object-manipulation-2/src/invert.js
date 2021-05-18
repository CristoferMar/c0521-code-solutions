/* exported invert */

// store a new object
// check each property
// add the value as key and key as value, to new object
// return new object

function invert(source) {
  var invertThis = {};
  for (var prop in source) {
    invertThis[source[prop]] = prop;
  }
  return invertThis;
}
