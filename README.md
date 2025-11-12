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

Edge cases handled consistently:

- `n <= 0` → `[]`
- `n === 1` → `[0]`
- `n === 2` → `[0, 1]`

### Example

```js
// Requires Node with ESM enabled (e.g., add { "type": "module" } in package.json)
import { fibs, fibsRec, fibsRecMemo } from './fibonacci.js';

console.log(fibs(8));        // [0,1,1,2,3,5,8,13]
console.log(fibsRec(8));     // [0,1,1,2,3,5,8,13]
console.log(fibsRecMemo(8)); // [0,1,1,2,3,5,8,13]
```

### Flow (Iterative `fibs`)

```mermaid
flowchart TD
  A[Start n] --> B{n <= 0?}
  B -- yes --> C[Return []]
  B -- no --> D{n == 1?}
  D -- yes --> E[Return [0]]
  D -- no --> F[Init arr = [0,1]]
  F --> G{i from 2 to n-1}
  G --> H[arr[i] = arr[i-1] + arr[i-2]]
  H --> G
  G -->|done| I[Return arr]
```

### Recursion Tree (Conceptual `fibsRec` for n=6)

```mermaid
flowchart TD
  R[fibsRec(6)] --> A[fibsRec(5)]
  R --> B[push(sum last two)]
  A --> A1[fibsRec(4)]
  A --> A2[push(sum last two)]
  A1 --> A1a[... until base [0,1]]
```

Note: The implementation builds arrays up from base cases, so the branching above is conceptual to illustrate repeated substructure.

---

## mergeSort.js

Implements Merge Sort with a helper `merge(left, right)`. The function returns a new sorted array and does not mutate the input.

- `mergeSort(arr)`: Recursively splits `arr` into halves, sorts each half, then merges.
- `merge(left, right)`: Linear merge of two sorted arrays.

Complexity:

- Time: `O(n log n)`
- Space: `O(n)` (additional arrays during splitting/merging)

> Current file does not export `mergeSort`. Use it by running the file directly or by adding an export if you want to import it elsewhere.

### Example (direct usage pattern)

```js
// In a Node REPL or another file in the same folder after adding an export:
// export { mergeSort };
// then:
// import { mergeSort } from './mergeSort.js';

// Example behavior
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// [3, 9, 10, 27, 38, 43, 82]
```

### Flow (Divide and Conquer)

```mermaid
flowchart TD
  A[mergeSort(arr)] --> B{arr.length <= 1?}
  B -- yes --> C[Return arr]
  B -- no --> D[Find mid]
  D --> E[left = mergeSort(arr[0..mid))]
  D --> F[right = mergeSort(arr[mid..end))]
  E --> G[merge(left, right)]
  F --> G
  G --> H[Return merged]
```

### Merge Procedure

```mermaid
sequenceDiagram
  participant L as left[]
  participant R as right[]
  participant O as output[]
  loop while i < L.length && j < R.length
    alt L[i] < R[j]
      L->>O: push L[i]; i++
    else
      R->>O: push R[j]; j++
    end
  end
  L-->>O: append remaining L[i..]
  R-->>O: append remaining R[j..]
```

---

## How to Run

- Node REPL quick test
  - `node`
  - For Fibonacci (ESM):
    - Ensure `package.json` has `{ "type": "module" }` or rename to `.mjs`.
    - `import { fibs } from './fibonacci.js';`
    - `fibs(10)`
  - For Merge Sort (no export yet):
    - Option 1: Add `export { mergeSort };` at the end of `mergeSort.js` and then `import { mergeSort } from './mergeSort.js';`
    - Option 2: Copy the function into your test file and call `mergeSort([...])`.

## Notes

- All functions are pure and return new arrays.
- Inputs are assumed to be valid arrays and integers (no runtime validation added).
