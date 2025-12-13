/**
 * Longest Increasing Subsequence (LIS)
 * 
 * Problem: Given an integer array nums, return the length of the longest 
 * strictly increasing subsequence.
 * 
 * Example:
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,18] or [2,5,7,18]
 */

// ============================================
// APPROACH 1: Dynamic Programming O(n²)
// ============================================
/**
 * Time: O(n²)
 * Space: O(n)
 * 
 * For each element, check all previous elements to see if we can extend
 * any existing subsequence.
 */
var lengthOfLIS_DP = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    // dp[i] = length of LIS ending at index i
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        // Check all previous elements
        for (let j = 0; j < i; j++) {
            // If nums[j] < nums[i], we can extend the subsequence ending at j
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // Return the maximum value in dp array
    return Math.max(...dp);
};

// ============================================
// APPROACH 2: Binary Search + DP O(n log n) ⭐ OPTIMAL
// ============================================
/**
 * Time: O(n log n)
 * Space: O(n)
 * 
 * Maintain an array where tails[i] = smallest tail element of all increasing
 * subsequences of length i+1.
 * 
 * Key insight: We only care about the smallest tail element for each length.
 */
var lengthOfLIS_BinarySearch = function(nums) {
    if (!nums || nums.length === 0) return 0;
    
    // tails[i] = smallest tail element of all LIS of length i+1
    const tails = [];
    
    for (const num of nums) {
        // Binary search for the position to insert/replace
        let left = 0;
        let right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // If num is larger than all elements in tails, extend the sequence
        if (left === tails.length) {
            tails.push(num);
        } else {
            // Replace the element at left with num (smaller or equal)
            tails[left] = num;
        }
    }
    
    return tails.length;
};

// ============================================
// APPROACH 3: Using Patience Sorting (Same as Binary Search)
// ============================================
/**
 * This is essentially the same as the binary search approach,
 * but the name "patience sorting" comes from the card game analogy.
 */
var lengthOfLIS_Patience = function(nums) {
    const piles = [];
    
    for (const num of nums) {
        // Binary search for leftmost pile where we can place this card
        let left = 0;
        let right = piles.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (piles[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        if (left === piles.length) {
            piles.push(num);
        } else {
            piles[left] = num;
        }
    }
    
    return piles.length;
};

// ============================================
// TEST CASES
// ============================================
function test() {
    const testCases = [
        { input: [10,9,2,5,3,7,101,18], expected: 4 },
        { input: [0,1,0,3,2,3], expected: 4 },
        { input: [7,7,7,7,7,7,7], expected: 1 },
        { input: [1], expected: 1 },
        { input: [3,2,1], expected: 1 },
        { input: [1,3,6,7,9,4,10,5,6], expected: 6 },
    ];
    
    console.log("Testing DP O(n²) approach:");
    testCases.forEach(({ input, expected }) => {
        const result = lengthOfLIS_DP(input);
        console.log(`Input: [${input.join(',')}]`);
        console.log(`Expected: ${expected}, Got: ${result}, ${result === expected ? '✓' : '✗'}`);
    });
    
    console.log("\nTesting Binary Search O(n log n) approach:");
    testCases.forEach(({ input, expected }) => {
        const result = lengthOfLIS_BinarySearch(input);
        console.log(`Input: [${input.join(',')}]`);
        console.log(`Expected: ${expected}, Got: ${result}, ${result === expected ? '✓' : '✗'}`);
    });
}

// Uncomment to run tests:
// test();

// ============================================
// EXPLANATION
// ============================================
/**
 * WHY BINARY SEARCH WORKS:
 * 
 * Example: nums = [10, 9, 2, 5, 3, 7, 101, 18]
 * 
 * Step by step:
 * 10 -> tails = [10]
 * 9  -> tails = [9]      (replaced 10, since 9 < 10)
 * 2  -> tails = [2]      (replaced 9, since 2 < 9)
 * 5  -> tails = [2, 5]   (5 > 2, so extend)
 * 3  -> tails = [2, 3]   (replaced 5, since 3 < 5)
 * 7  -> tails = [2, 3, 7] (7 > 3, so extend)
 * 101-> tails = [2, 3, 7, 101] (101 > 7, so extend)
 * 18 -> tails = [2, 3, 7, 18]  (replaced 101, since 18 < 101)
 * 
 * Result: length = 4
 * 
 * Key insight: We maintain the smallest possible tail for each length.
 * This allows us to potentially extend sequences with smaller numbers later.
 */

// ============================================
// RECOMMENDED SOLUTION
// ============================================
/**
 * For interviews, use the Binary Search approach (O(n log n))
 * It's optimal and demonstrates understanding of advanced techniques.
 */
var lengthOfLIS = function(nums) {
    const tails = [];
    
    for (const num of nums) {
        let left = 0, right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    return tails.length;
};

