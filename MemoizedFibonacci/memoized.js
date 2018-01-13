function fibMemo(index, cache) {
  cache = cache || [];

  if(cache[index]){
    return cache[index];
  } else {
    if(index < 3) {
      return 1;
    } else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

console.log(fibMemo(12));
console.log(fibMemo(20));
console.log(fibMemo(50));
function fibMemo(index, cache) {
  cache = cache || [];

  if(cache[index]){
    return cache[index];
  } else {
    if(index < 3) {
      return 1;
    } else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}

console.log(fibMemo(12));
console.log(fibMemo(20));
console.log(fibMemo(50));