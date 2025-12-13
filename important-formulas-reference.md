# Important Formulas for Coding Interviews & Algorithms

## 1. Sum Formulas

### Sum of First N Natural Numbers
```
1 + 2 + 3 + ... + n = n(n + 1) / 2
```
**Use cases:** Missing number, array sum problems

### Sum of First N Even Numbers
```
2 + 4 + 6 + ... + 2n = n(n + 1)
```

### Sum of First N Odd Numbers
```
1 + 3 + 5 + ... + (2n-1) = n²
```

### Sum of Squares
```
1² + 2² + 3² + ... + n² = n(n + 1)(2n + 1) / 6
```

### Sum of Cubes
```
1³ + 2³ + 3³ + ... + n³ = [n(n + 1) / 2]²
```

---

## 2. Arithmetic Series

### General Formula
```
Sum = n/2 × (first + last)
Sum = n/2 × [2a + (n-1)d]
```
Where:
- `a` = first term
- `d` = common difference
- `n` = number of terms

**Use cases:** Range sum queries, sliding window problems

---

## 3. Geometric Series

### Finite Geometric Series
```
a + ar + ar² + ... + arⁿ⁻¹ = a(1 - rⁿ) / (1 - r)  (when r ≠ 1)
```

### Infinite Geometric Series (when |r| < 1)
```
a + ar + ar² + ... = a / (1 - r)
```

**Use cases:** Power calculations, exponential growth problems

---

## 4. Combinatorics

### Factorial
```
n! = n × (n-1) × (n-2) × ... × 1
0! = 1
```

### Permutations (Order matters)
```
P(n, r) = n! / (n - r)!
```

### Combinations (Order doesn't matter)
```
C(n, r) = n! / [r! × (n - r)!]
C(n, r) = C(n, n - r)  // Symmetry property
```

### Pascal's Triangle
```
C(n, k) = C(n-1, k-1) + C(n-1, k)
```

**Use cases:** Subset problems, path counting, probability

---

## 5. Number Theory

### Greatest Common Divisor (GCD)
```javascript
// Euclidean Algorithm
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
```

### Least Common Multiple (LCM)
```
LCM(a, b) = (a × b) / GCD(a, b)
```

### Prime Number Check
- Trial division: Check up to √n
- Sieve of Eratosthenes: O(n log log n)

### Modular Arithmetic
```
(a + b) mod m = [(a mod m) + (b mod m)] mod m
(a × b) mod m = [(a mod m) × (b mod m)] mod m
(a - b) mod m = [(a mod m) - (b mod m) + m] mod m
```

### Fast Exponentiation (Power)
```javascript
// Calculate a^b mod m in O(log b)
function power(a, b, m) {
    let result = 1;
    a = a % m;
    while (b > 0) {
        if (b % 2 === 1) result = (result * a) % m;
        b = Math.floor(b / 2);
        a = (a * a) % m;
    }
    return result;
}
```

---

## 6. Bit Manipulation

### Basic Operations
```
x & (x - 1)  // Removes lowest set bit
x & (-x)     // Gets lowest set bit
x | (x + 1)  // Sets lowest unset bit
x ^ x = 0    // XOR with itself = 0
x ^ 0 = x    // XOR with 0 = identity
```

### Power of 2 Check
```
n & (n - 1) === 0  // True if n is power of 2 (and n > 0)
```

### Count Set Bits
```javascript
// Brian Kernighan's Algorithm
function countBits(n) {
    let count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}
```

---

## 7. Logarithms

### Properties
```
log(a × b) = log(a) + log(b)
log(a / b) = log(a) - log(b)
log(a^b) = b × log(a)
log_b(a) = log_c(a) / log_c(b)  // Change of base
```

### Common Values
```
log₂(2) = 1
log₂(4) = 2
log₂(8) = 3
log₂(16) = 4
log₂(1024) = 10
```

**Use cases:** Binary search complexity, tree height calculations

---

## 8. Fibonacci & Recurrence Relations

### Fibonacci Sequence
```
F(0) = 0, F(1) = 1
F(n) = F(n-1) + F(n-2)
```

### Binet's Formula (Closed form)
```
F(n) = (φⁿ - ψⁿ) / √5
where φ = (1 + √5) / 2 (golden ratio)
      ψ = (1 - √5) / 2
```

### Matrix Exponentiation (Fast Fibonacci)
```
[F(n+1)  F(n)  ]   [1  1]ⁿ
[F(n)    F(n-1)] = [1  0]
```

---

## 9. String/Array Formulas

### Substring Count
```
For string of length n:
- Total substrings = n(n + 1) / 2
- Substrings of length k = n - k + 1
```

### Subarray Count
```
For array of length n:
- Total subarrays = n(n + 1) / 2
- Contiguous subarrays = n(n + 1) / 2
```

### Subset Count
```
For set of n elements:
- Total subsets = 2ⁿ
- Subsets of size k = C(n, k)
```

---

## 10. Tree & Graph Formulas

### Binary Tree
```
- Maximum nodes at level h = 2ʰ
- Maximum nodes in tree of height h = 2ʰ⁺¹ - 1
- Minimum height with n nodes = ⌊log₂(n)⌋
- Maximum height with n nodes = n - 1 (skewed)
```

### Complete Binary Tree
```
- Height = ⌊log₂(n)⌋
- Nodes at last level = n - (2ʰ - 1)
```

### Graph
```
- Maximum edges in undirected graph = n(n - 1) / 2
- Maximum edges in directed graph = n(n - 1)
```

---

## 11. Time Complexity Patterns

### Common Patterns
```
O(1)        - Constant
O(log n)    - Binary search, tree operations
O(n)        - Linear scan
O(n log n)  - Sorting, divide & conquer
O(n²)       - Nested loops
O(2ⁿ)       - Exponential (subsets, combinations)
O(n!)       - Factorial (permutations)
```

### Master Theorem (for recurrences)
```
T(n) = aT(n/b) + f(n)
- If f(n) = O(n^c) where c < log_b(a): T(n) = Θ(n^log_b(a))
- If f(n) = Θ(n^c) where c = log_b(a): T(n) = Θ(n^c log n)
- If f(n) = Ω(n^c) where c > log_b(a): T(n) = Θ(f(n))
```

---

## 12. Useful JavaScript Math Functions

```javascript
Math.floor(x)    // Round down
Math.ceil(x)     // Round up
Math.round(x)    // Round to nearest
Math.max(a, b)   // Maximum
Math.min(a, b)   // Minimum
Math.abs(x)      // Absolute value
Math.pow(a, b)   // a^b
Math.sqrt(x)     // √x
Math.log(x)      // Natural log
Math.log2(x)     // Log base 2
Math.log10(x)    // Log base 10
```

---

## 13. Common Problem Patterns

### Sliding Window
```
Window size k in array of length n:
- Number of windows = n - k + 1
```

### Two Pointers
```
- Often O(n) time complexity
- Works on sorted arrays
```

### Prefix Sum
```
prefix[i] = arr[0] + arr[1] + ... + arr[i]
Range sum [i, j] = prefix[j] - prefix[i-1]
```

### Kadane's Algorithm (Maximum Subarray)
```javascript
let maxSum = arr[0];
let currentSum = arr[0];
for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
}
```

---

## Quick Reference Cheat Sheet

| Formula | Use Case |
|---------|----------|
| `n(n+1)/2` | Sum of 1 to n |
| `n(n+1)(2n+1)/6` | Sum of squares |
| `2ⁿ` | Total subsets |
| `n!/(r!(n-r)!)` | Combinations |
| `⌊log₂(n)⌋` | Binary tree height |
| `n & (n-1) === 0` | Power of 2 check |
| `(a × b) / GCD(a, b)` | LCM |

---

## Resources for Learning More

- **Khan Academy**: Arithmetic & Geometric Series
- **GeeksforGeeks**: Mathematical algorithms section
- **LeetCode**: Math tag problems
- **Wikipedia**: Combinatorics, Number Theory
- **CP-Algorithms**: Competitive programming algorithms

