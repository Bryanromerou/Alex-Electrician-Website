// Your current implementation
var missingNumber = function(nums) {
    const sortNums = nums.sort((a,b)=>a-b)  // O(n log n) - sorting
    for(let i = 0; i< nums.length; i++){   // O(n) - linear scan
        if(nums[i]!==i){
            return i;
        }
    }
    return nums.length;
};

// Time Complexity: O(n log n)
// - Sorting: O(n log n) - this dominates
// - Loop: O(n)
// - Total: O(n log n) + O(n) = O(n log n)

// Space Complexity: O(1) additional space
// - sort() is in-place (modifies nums)
// - Note: sortNums is assigned but never used (minor bug)

// ============================================
// OPTIMIZED VERSIONS (O(n) time):
// ============================================

// Option 1: Using Set - O(n) time, O(n) space
var missingNumberSet = function(nums) {
    const numSet = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
};

// Option 2: Using sum formula - O(n) time, O(1) space (BEST!)
// Sum of 0 to n = n * (n + 1) / 2
var missingNumberSum = function(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
};

// Option 3: Using XOR - O(n) time, O(1) space
// XOR all numbers from 0 to n with all numbers in array
// Missing number will be the result
var missingNumberXOR = function(nums) {
    let result = nums.length; // Start with n
    for (let i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    return result;
};

