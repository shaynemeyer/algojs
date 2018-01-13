function binarySearch(numArray, key) {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElem = numArray[middleIdx];

  if(middleElem === key) {
    // base case
    return true;
  } else if (middleElem < key && numArray.length > 1) {
    // recursive case
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIdx), key);
  } else {
    return false;
  }
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5);
binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 3);
