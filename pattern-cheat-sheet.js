/**
 * ALGORITHM PATTERN CHEAT SHEET
 * Copy and adapt these templates for your problems
 */

// ============================================
// 1. TWO POINTERS
// ============================================
// Use when: Sorted array, palindrome, two sum
// Time: O(n), Space: O(1)

function twoPointers(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Do something
        if (condition) {
            left++;
        } else {
            right--;
        }
    }
    
    return result;
}

// Example: Two Sum (sorted)
function twoSum(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        if (sum < target) left++;
        else right--;
    }
    
    return [];
}

// ============================================
// 2. SLIDING WINDOW
// ============================================
// Use when: Substring, subarray, "longest/shortest"
// Time: O(n), Space: O(k) where k is window size

function slidingWindow(s) {
    let left = 0;
    const window = new Map(); // or Set
    
    for (let right = 0; right < s.length; right++) {
        // Expand window
        window.set(s[right], (window.get(s[right]) || 0) + 1);
        
        // Shrink if invalid
        while (windowInvalid(window)) {
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);
            if (window.get(leftChar) === 0) window.delete(leftChar);
            left++;
        }
        
        // Update result
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}

// Example: Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let left = 0, maxLen = 0;
    const seen = new Set();
    
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}

// ============================================
// 3. BINARY SEARCH
// ============================================
// Use when: Sorted array, search, "find in sorted"
// Time: O(log n), Space: O(1)

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// ============================================
// 4. HASH MAP / SET
// ============================================
// Use when: Frequency, duplicates, lookups
// Time: O(n), Space: O(n)

function hashMapPattern(arr) {
    const map = new Map(); // or Set
    
    for (const item of arr) {
        // Count frequency
        map.set(item, (map.get(item) || 0) + 1);
        
        // Or check existence
        if (map.has(item)) {
            // Found duplicate
        }
    }
    
    return result;
}

// Example: Two Sum (unsorted)
function twoSumHash(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return [];
}

// ============================================
// 5. DYNAMIC PROGRAMMING
// ============================================
// Use when: Overlapping subproblems, "ways to", optimization
// Time: Usually O(n²) or O(n), Space: O(n)

function dpPattern(n) {
    // 1. Define DP array
    const dp = new Array(n + 1).fill(0);
    
    // 2. Base cases
    dp[0] = baseCase;
    dp[1] = baseCase;
    
    // 3. Fill DP array
    for (let i = 2; i <= n; i++) {
        dp[i] = recurrenceRelation(dp, i);
    }
    
    return dp[n];
}

// Example: Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// ============================================
// 6. BACKTRACKING
// ============================================
// Use when: Permutations, combinations, "generate all"
// Time: Usually exponential, Space: O(n)

function backtrack(result, current, options) {
    // Base case
    if (isComplete(current)) {
        result.push([...current]); // Copy, don't reference
        return;
    }
    
    // Try each option
    for (const option of options) {
        // Make choice
        current.push(option);
        
        // Recurse
        backtrack(result, current, getNextOptions(option));
        
        // Undo choice (backtrack)
        current.pop();
    }
}

// Example: Generate Permutations
function permute(nums) {
    const result = [];
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (const num of nums) {
            if (current.includes(num)) continue; // Skip used
            current.push(num);
            backtrack(current);
            current.pop();
        }
    }
    
    backtrack([]);
    return result;
}

// ============================================
// 7. DFS (Depth-First Search)
// ============================================
// Use when: Tree/graph traversal, explore all paths
// Time: O(V + E), Space: O(h) where h is height

function dfs(node) {
    // Base case
    if (!node) return;
    
    // Process node (pre-order)
    process(node);
    
    // Recurse on children
    for (const child of node.children) {
        dfs(child);
    }
    
    // Process node (post-order)
    processAfter(node);
}

// Example: Tree Traversal
function inorderTraversal(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        dfs(node.left);      // Left
        result.push(node.val); // Visit
        dfs(node.right);     // Right
    }
    
    dfs(root);
    return result;
}

// ============================================
// 8. BFS (Breadth-First Search)
// ============================================
// Use when: Shortest path, level-order traversal
// Time: O(V + E), Space: O(V)

function bfs(root) {
    if (!root) return;
    
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            // Process node
            process(node);
            
            // Add children
            for (const child of node.children) {
                queue.push(child);
            }
        }
    }
}

// Example: Level Order Traversal
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const level = [];
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(level);
    }
    
    return result;
}

// ============================================
// 9. GREEDY
// ============================================
// Use when: Local optimal leads to global optimal
// Time: Usually O(n log n) due to sorting

function greedy(arr) {
    // Usually need to sort first
    arr.sort((a, b) => a - b);
    
    let result = 0;
    
    for (const item of arr) {
        if (isValidChoice(item)) {
            result++;
            // Update state
        }
    }
    
    return result;
}

// ============================================
// 10. STACK
// ============================================
// Use when: Matching parentheses, next greater element
// Time: O(n), Space: O(n)

function stackPattern(s) {
    const stack = [];
    
    for (const char of s) {
        if (isOpening(char)) {
            stack.push(char);
        } else {
            if (stack.length === 0 || !matches(stack.pop(), char)) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Example: Valid Parentheses
function isValid(s) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };
    
    for (const char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// ============================================
// PATTERN RECOGNITION GUIDE
// ============================================

/*
PROBLEM KEYWORDS → PATTERN:

"Two numbers that sum to X" → Two Pointers or Hash Map
"Longest substring" → Sliding Window
"Search in sorted" → Binary Search
"Count ways to" → Dynamic Programming
"Generate all" → Backtracking
"Shortest path" → BFS
"Visit all nodes" → DFS
"Frequency/count" → Hash Map
"Matching" → Stack
"Optimal" → Greedy or DP
*/

