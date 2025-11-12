# Recursion Exercises: Fibonacci and Merge Sort

This repo contains two classic recursion exercises implemented in JavaScript:

- Fibonacci sequence (iterative, recursive, and memoized recursive)
- Merge Sort (divide and conquer sorting algorithm)

---

## Files

- `fibonacci.js`
- `mergeSort.js`

---

## fibonacci.js

Exports three functions that return an array of the first `n` Fibonacci numbers starting from 0.

- `fibs(n)`: Iterative approach.
- `fibsRec(n)`: Pure recursive array-building approach.
- `fibsRecMemo(n, memo)`: Recursive with memoization for intermediate arrays.

### Example

```js
import { fibs, fibsRec, fibsRecMemo } from './fibonacci.js';

console.log(fibs(8));        // [0,1,1,2,3,5,8,13]
console.log(fibsRec(8));     // [0,1,1,2,3,5,8,13]
console.log(fibsRecMemo(8)); // [0,1,1,2,3,5,8,13]
```

---

## mergeSort.js

Implements Merge Sort with a helper `merge(left, right)`. The function returns a new sorted array and does not mutate the input.

- `mergeSort(arr)`: Recursively splits `arr` into halves, sorts each half, then merges.
- `merge(left, right)`: Linear merge of two sorted arrays.

Complexity:

- Time: `O(n log n)`
- Space: `O(n)` (additional arrays during splitting/merging)

### Example (direct usage pattern)

```js
// import { mergeSort } from './mergeSort.js';

// Example behavior
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// [3, 9, 10, 27, 38, 43, 82]
```

---

## Notes

- All functions are pure and return new arrays.
- Inputs are assumed to be valid arrays and integers (no runtime validation added).
