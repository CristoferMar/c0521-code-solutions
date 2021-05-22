/* exported titleCase */

// lowerCase whole phrase & split and store the sentance into an array
// make a new storage for the new sentance

// make function for capitalizing firt letter
// set guard (word is javascript)
// set guard for string 'API'
// return JavaScript string

// store first letter and capitalize it
// store remaining letters
// concatinate first letter with remianing letters
// return word with capitalized letter

// check each item in the array
//   // split current item by '-' & store
//       // set guard (if item length > 1)
//             // store first word
//             // call CapFunction for next words & concatinate '-' & return

//       set guard (if index is 0)
//             call capitalizer and store return
//             assign value to current stored item
//       else if ()
//             set guard (if item = and, or, for, etc)
//                   concatinate

function titleCase(title) {
  // debugger;
  var splitArray = title.toLowerCase();
  splitArray = splitArray.split(' ');
  var newTitle = '';
  var subHead = 0;

  function capWord(word) {
    if (word === 'javascript') {
      return 'JavaScript';
    }
    if (word === 'javascript:') {
      subHead = 0;
      return 'JavaScript:';
    }
    if (word === 'api') {
      return 'API';
    }
    var capped = word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
    return capped;
  }

  for (var i = 0; i < splitArray.length; i++) {
    var currentWord = splitArray[i].split('-');

    if (currentWord.length > 1) {
      var dashed = currentWord[0];
      for (var d = 1; d < currentWord.length; d++) {
        dashed += '-' + capWord(currentWord[d]);
      }
      currentWord = dashed;

    } else { currentWord = currentWord[0]; }

    if (subHead === 0) {
      subHead = 1;
      currentWord = capWord(currentWord);

    } else if (
      currentWord !== 'and' &&
      currentWord !== 'or' &&
      currentWord !== 'nor' &&
      currentWord !== 'but' &&
      currentWord !== 'a' &&
      currentWord !== 'an' &&
      currentWord !== 'the' &&
      currentWord !== 'as' &&
      currentWord !== 'at' &&
      currentWord !== 'by' &&
      currentWord !== 'for' &&
      currentWord !== 'in' &&
      currentWord !== 'of' &&
      currentWord !== 'on' &&
      currentWord !== 'per' &&
      currentWord !== 'to'
    ) {
      currentWord = capWord(currentWord);
    }

    newTitle += ' ' + currentWord;
  }
  newTitle = newTitle.substr(1);
  return newTitle;
}
