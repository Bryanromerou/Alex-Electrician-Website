# Two-Pointer Technique: Practice Guide

## 🎯 Master Pattern Recognition

The **Two-Pointer Technique** is one of the most powerful patterns in algorithm design. Once you recognize it, you can solve many problems efficiently.

---

## 📋 Pattern Checklist

Ask yourself these questions when approaching a problem:

### ✅ Does the problem involve:
- [ ] **Symmetry** (palindromes, matching pairs)
- [ ] **Sorted arrays** (can eliminate possibilities)
- [ ] **Finding pairs** that meet a condition
- [ ] **Optimization** (max/min area, sum, etc.)
- [ ] **Converging** toward a solution

If you checked any box → **Two-Pointer Technique might work!**

---

## 🔥 Problem Categories

### Category 1: Expand Around Centers
**Pattern:** Start at a center and expand outward

#### Problems:
1. **Longest Palindromic Substring** ✅ (you just learned this!)
2. **Palindromic Substrings** (count all palindromes)
3. **Valid Palindrome** (check if string is palindrome)
4. **Shortest Palindrome** (add minimum chars to make palindrome)

#### Template:
```typescript
function expandAroundCenter(left: number, right: number): number {
    while (left >= 0 && right < n && isValid(left, right)) {
        left--;
        right++;
    }
    return calculateResult(left, right);
}

for (let i = 0; i < n; i++) {
    // Check odd-length
    expandAroundCenter(i, i);
    // Check even-length
    expandAroundCenter(i, i + 1);
}
```

---

### Category 2: Converging Pointers
**Pattern:** Start at both ends, move toward each other

#### Problems:
1. **Two Sum (sorted array)**
   ```typescript
   // Find two numbers that sum to target
   let left = 0, right = arr.length - 1;
   while (left < right) {
       const sum = arr[left] + arr[right];
       if (sum === target) return [left, right];
       else if (sum < target) left++;
       else right--;
   }
   ```

2. **Container With Most Water**
   ```typescript
   // Find two lines that form container with max area
   let left = 0, right = height.length - 1;
   let maxArea = 0;
   while (left < right) {
       const area = Math.min(height[left], height[right]) * (right - left);
       maxArea = Math.max(maxArea, area);
       if (height[left] < height[right]) left++;
       else right--;
   }
   ```

3. **3Sum / 4Sum**
   - Fix one element, use two pointers for the rest

4. **Trapping Rain Water**
   - Two pointers from both ends
   - Track max heights from each side

#### Template:
```typescript
let left = 0, right = arr.length - 1;
while (left < right) {
    if (condition) {
        // Process result
        left++; // or right--, or both
    } else if (shouldMoveLeft) {
        left++;
    } else {
        right--;
    }
}
```

---

### Category 3: Fast & Slow Pointers
**Pattern:** One pointer moves faster than the other

#### Problems:
1. **Linked List Cycle Detection**
   ```typescript
   let slow = head, fast = head;
   while (fast && fast.next) {
       slow = slow.next;
       fast = fast.next.next;
       if (slow === fast) return true; // cycle found
   }
   ```

2. **Find Middle of Linked List**
3. **Remove Nth Node From End**
4. **Palindrome Linked List**

#### Template:
```typescript
let slow = start, fast = start;
while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    // Process or check condition
}
```

---

### Category 4: Sliding Window (Two Pointers Variant)
**Pattern:** Maintain a window that slides through the array

#### Problems:
1. **Longest Substring Without Repeating Characters**
2. **Minimum Window Substring**
3. **Longest Repeating Character Replacement**
4. **Subarray with Given Sum**

#### Template:
```typescript
let left = 0;
for (let right = 0; right < n; right++) {
    // Expand window
    window.add(arr[right]);
    
    // Shrink window if needed
    while (windowInvalid()) {
        window.remove(arr[left]);
        left++;
    }
    
    // Update answer
    updateAnswer();
}
```

---

## 🎓 Learning Path

### Week 1: Master the Basics
1. ✅ **Longest Palindromic Substring** (you're here!)
2. **Valid Palindrome** - Simpler version
3. **Two Sum (sorted)** - Classic converging pointers
4. **Container With Most Water** - Optimization problem

### Week 2: Expand Your Skills
1. **Palindromic Substrings** - Count all (variation of what you learned)
2. **3Sum** - Two pointers with fixed element
3. **Trapping Rain Water** - More complex converging
4. **Longest Substring Without Repeating** - Sliding window

### Week 3: Advanced Applications
1. **Minimum Window Substring** - Complex sliding window
2. **Linked List problems** - Fast & slow pointers
3. **4Sum** - Multiple two-pointer applications
4. **String problems** - Multiple two-pointer patterns

---

## 🧠 Mental Models

### Model 1: The Symmetry Model
```
     ← expand →
        a b a
```
**Use when:** Checking palindromes, matching pairs

### Model 2: The Elimination Model
```
left →           ← right
  [1, 2, 3, 4, 5, 6]
```
**Use when:** Sorted array, can eliminate possibilities

### Model 3: The Window Model
```
[  left  →  right  ]
```
**Use when:** Need to maintain a subarray/substring

### Model 4: The Race Model
```
slow → → fast → → →
```
**Use when:** Need to find middle, detect cycles

---

## 💡 Key Insights

### 1. **Why Two Pointers Works**
- **Eliminates redundant checks**: Once you know `arr[left] + arr[right] < target`, you know `arr[left] + arr[anything < right]` also won't work
- **Uses problem structure**: Sorted arrays, symmetry, etc.
- **Reduces complexity**: Often O(n²) → O(n) or O(n³) → O(n²)

### 2. **When to Use Which Pattern**
- **Expand around center**: Symmetry, palindromes
- **Converging**: Sorted arrays, optimization
- **Fast & slow**: Linked lists, cycles, middle finding
- **Sliding window**: Subarrays, substrings with conditions

### 3. **Common Mistakes**
- ❌ Not handling edge cases (empty, single element)
- ❌ Off-by-one errors in boundary conditions
- ❌ Not updating pointers correctly
- ❌ Forgetting to check bounds before accessing

---

## 🎯 Practice Problems by Difficulty

### Easy
- Valid Palindrome
- Two Sum (sorted)
- Remove Duplicates from Sorted Array
- Reverse String

### Medium
- Longest Palindromic Substring ✅
- Container With Most Water
- 3Sum
- Longest Substring Without Repeating Characters
- Trapping Rain Water

### Hard
- Minimum Window Substring
- Trapping Rain Water II
- Longest Valid Parentheses (with stack)

---

## 🔧 Debugging Tips

### 1. **Visualize the Pointers**
```typescript
console.log(`left=${left} (${arr[left]}), right=${right} (${arr[right]})`);
```

### 2. **Check Boundary Conditions**
- Always verify: `left >= 0`, `right < length`
- Handle empty arrays/strings
- Handle single element cases

### 3. **Trace Through Examples**
- Draw the array/string
- Mark pointer positions
- Step through manually
- Compare with your code

### 4. **Test Edge Cases**
- Empty input
- Single element
- All same elements
- No valid solution
- Multiple valid solutions

---

## 📚 Resources

### LeetCode Lists
- [Two Pointers](https://leetcode.com/tag/two-pointers/)
- [Sliding Window](https://leetcode.com/tag/sliding-window/)

### Study Strategy
1. **Understand the pattern** (not just memorize)
2. **Solve 3-5 problems** in each category
3. **Explain to someone** (or write it down)
4. **Identify the pattern** in new problems
5. **Practice variations** of the same problem

---

## 🎯 Your Next Steps

1. ✅ **You've learned**: Expand around centers pattern
2. **Practice**: Solve "Valid Palindrome" (easier version)
3. **Practice**: Solve "Palindromic Substrings" (count all)
4. **Learn**: Converging pointers with "Two Sum (sorted)"
5. **Master**: Apply pattern recognition to new problems

Remember: **Pattern recognition > Memorization**

The goal isn't to memorize solutions, but to recognize when a pattern applies and adapt it to the problem at hand!

