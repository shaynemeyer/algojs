# Bubble Sort
Given an array of number return the array sorted from least to greatest.

## Example
We move through the array comparing t the current number with the number to it right. If the number on the left is great than the number on the right, swap them, otherwise move on until the array is done.

It is called bubble sort because the larger numbers, bubble up to the top of the array.

### start with this array
```
[5, 3, 8, 2, 1, 4]
```
### first pass through
```
[3, 5, 2, 1, 4, 8]
```
### next pass
```
[3, 2, 1, 4, 5, 8]
```
### next pass
```
[2, 1, 3, 4, 5, 8]
```
### final pass
```
[1, 2, 3, 4, 5, 8]
```

## How long does it take?
The length of the array minus 1 passes to fully sort the array.
