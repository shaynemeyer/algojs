function getMean(array) {
  // The mean is the usual average
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

function getMedian(array){
  // The median is the middle value
  // sort the array
  var newArray = array.sort();
  // get the middle of the array
  var middle = Math.round(array.length / 2)
  return newArray[middle];
}

function getMode(array){
  // The mode is the number that is repeated more often than any other
  var numMap = {};
  var mostFreq = 0;
  var modes = [];

  array.forEach(num => {
    numMap[num] = (numMap[num] || 0) + 1;

    if(!numMap[num]){
      numMap[num] = 0;
    }
    numMap[num]++;
  });

  for(var n in numMap){
    if(numMap[n] > mostFreq){
      modes=[n];
      mostFreq = numMap[n];
    } else if (numMap[n] === mostFreq) {
      modes.push(n)
    }
  }

  // if every value appears same amount of times
  if(modes.length === Object.keys(numMap).length){
    modes = [];
  }

  return modes;
}

function meanMedianMode(array){
  // return an {mean:0, median: 0, mode: 0}
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

console.log(meanMedianMode([9,10,23,10,23,9]));

console.log(meanMedianMode([1,2,3,4,5,4,6,1]));

console.log(meanMedianMode([13,18,13,14,13,16,14,21,13]));

console.log(meanMedianMode([3,4,2,3,6,4,1]));
