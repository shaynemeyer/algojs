function reverseWords(str) {
  var words = str.split(' ');
  var newWords = [];

  words.forEach(word => {
    var newWord = "";
    for(var i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }
    newWords.push(newWord);
  });

  return newWords.join(' ');
}

console.log(reverseWords('this is a string of words'));
