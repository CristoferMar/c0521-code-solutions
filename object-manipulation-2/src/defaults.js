/* exported defaults */

// store clone of source
// check each key in source clone
// compare each key to props in target
// if a key exists in both
//    delete key from sourseClone
// add sourseClone into target array

function defaults(target, source) {
  var trimSource = Object.assign({}, source);
  for (var prop in source) {
    for (var key in target) {
      if (key === prop) {
        delete trimSource[prop];
      }
    }
  }
  target = Object.assign(target, trimSource);
}
