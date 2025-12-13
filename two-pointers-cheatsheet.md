# Two-Pointers Technique: Quick Reference

## 🎯 When to Use

| Pattern | When to Use | Example Problems |
|---------|-------------|------------------|
| **Expand Around Center** | Symmetry, palindromes | Longest Palindromic Substring, Count Palindromes |
| **Converging Pointers** | Sorted arrays, optimization | Two Sum, Container With Most Water |
| **Fast & Slow** | Linked lists, cycles | Cycle Detection, Find Middle |
| **Sliding Window** | Subarrays/substrings | Longest Substring, Minimum Window |

---

## 📝 Code Templates

### 1. Expand Around Center
```typescript
function expandAroundCenter(left: number, right: number): number {
    while (left >= 0 && right < n && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

for (let i = 0; i < n; i++) {
    expandAroundCenter(i, i);      // odd-length
    expandAroundCenter(i, i + 1);  // even-length
}
```

### 2. Converging Pointers
```typescript
let left = 0, right = arr.length - 1;
while (left < right) {
    if (condition) {
        // process
        left++; // or right--, or both
    } else if (shouldMoveLeft) {
        left++;
    } else {
        right--;
    }
}
```

### 3. Fast & Slow
```typescript
let slow = head, fast = head;
while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // check condition
}
```

### 4. Sliding Window
```typescript
let left = 0;
for (let right = 0; right < n; right++) {
    // expand window
    while (windowInvalid()) {
        // shrink window
        left++;
    }
    // update answer
}
```

---

## 🔑 Key Formulas

### Length Calculation (Expand Around Center)
```typescript
// After expansion loop exits:
length = right - left - 1

// Why? Loop exits when left/right are ONE STEP beyond valid palindrome
```

### Start Position Calculation
```typescript
// For palindrome starting at center i with length len:
start = i - Math.floor((len - 1) / 2)

// Works for both odd and even length!
```

---

## ⚠️ Common Mistakes

1. **Off-by-one errors**
   - ✅ `right - left - 1` (not `right - left`)
   - ✅ `left >= 0` (not `left > 0`)
   - ✅ `right < length` (not `right <= length`)

2. **Boundary checks**
   - Always check bounds before accessing: `s[left]`, `s[right]`
   - Handle empty/single element cases

3. **Pointer updates**
   - Make sure you're moving the right pointer
   - Don't forget to update both pointers when needed

---

## 🧪 Test Cases to Always Check

- [ ] Empty string/array
- [ ] Single element
- [ ] Two elements (same and different)
- [ ] All same elements
- [ ] No valid solution
- [ ] Multiple valid solutions

---

## 💡 Quick Tips

1. **Draw it out**: Visualize pointers on paper
2. **Trace examples**: Step through manually
3. **Check boundaries**: Always verify `left >= 0` and `right < n`
4. **Understand the math**: Know why `right - left - 1` works
5. **Pattern recognition**: Look for symmetry, sorted arrays, pairs

---

## 📊 Complexity Analysis

| Pattern | Time | Space |
|---------|------|-------|
| Expand Around Center | O(n²) | O(1) |
| Converging Pointers | O(n) | O(1) |
| Fast & Slow | O(n) | O(1) |
| Sliding Window | O(n) | O(1) or O(k) |

---

## 🎓 Learning Order

1. ✅ **Longest Palindromic Substring** (Expand Around Center)
2. **Valid Palindrome** (Simpler expand)
3. **Two Sum (sorted)** (Converging)
4. **Container With Most Water** (Converging + optimization)
5. **Longest Substring Without Repeating** (Sliding window)

---

## 🔍 Pattern Recognition Questions

Ask yourself:
- Is there **symmetry**? → Expand around center
- Is the array **sorted**? → Converging pointers
- Do I need to find **pairs**? → Two pointers
- Is it about **subarrays/substrings**? → Sliding window
- Is it a **linked list**? → Fast & slow

---

## 📚 Related Patterns

- **Two Pointers** → Often combined with:
  - Sorting
  - Hash maps (for unsorted)
  - Stacks (for parentheses)
  - Greedy algorithms

---

*Remember: Pattern recognition > Memorization!*

