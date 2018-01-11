#Two Sum
When we pass in an array and a sum the result should be all pairs in the array that add up to the sum.

## Example

```javascript
numArray = [1, 6, 4, 5, 3, 3]

sum = 7

result = [[6, 1], [3, 4], [3, 4]]
```

## Rules
* Result should be an array of arrays.
* Any number in the 'numArray' can be used in multiple pairs.

## Multiple ways to accomplish
* can be done in O(n^2) time complexity using nest loops
* can be done in O(n) time complexity using a hash table.