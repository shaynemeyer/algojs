function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxy'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if(currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;

    if(newIndex > 25) {
      newIndex = newIndex - alphabet.length;
    }

    if(newIndex < 0) {
      newIndex = alphabet.length + newIndex;
    }

    if(str[i] === str[i].toUpperCase()){
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }

    return newString;
  }
}

console.log(caesarCipher('Zoo Keeper', 2)); // Bqq Mggrgt

console.log(caesarCipher('Big Car', -16)) // Lsq Mkb

console.log(caesarCipher('Javascript', -900)) // Tkfkcmbszd
