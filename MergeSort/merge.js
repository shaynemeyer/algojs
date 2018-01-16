function mergeSort(arr){
  // base case
  if(arr.length < 2) {
    return arr;
  }
  // split the array into two halves
  var middleIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2){
  var result = [];
  while(arr1.length && arr2.length){
    var minElem;
    if(arr1[0] < arr2[0]){
      minElem = arr1.shift();
    } else {
      minElem = arr2.shift();
    }

    result.push(minElem);
  }

  if(arr1.length){
    result = result.concat(arr1);
  } else {
    result = result.concat(arr2);
  }

  return result;
}

console.log(mergeSort([11,7,4,1,15,12,3]));

console.log(mergeSort([6000,34,203,3,746,200,984,198,764,1,9,1]));
