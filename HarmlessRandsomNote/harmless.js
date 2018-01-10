function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if(!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word] < 0){
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

var note = 'this is a note for you from a secret admirer'
var magazine = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but not that it is not as hard as it seems this is my advice for you. This is my note to you.'

console.log(harmlessRansomNote(note, magazine)); // true

var note2 = 'this is a note for you from a secret admirer'
var magazine2 = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but not that it is not as hard as it seems this is my advice for you.'

console.log(harmlessRansomNote(note2, magazine2)); // false