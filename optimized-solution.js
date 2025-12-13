// O(n) solution for longest consecutive sequence

var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // Create a Set for O(1) lookup
    const numSet = new Set(nums);
    let longestConsecutiveCount = 0;

    // Iterate through each number
    for (const num of numSet) {
        // Only start counting from the beginning of a sequence
        // (i.e., if num-1 doesn't exist, this is the start of a sequence)
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            // Count how long this consecutive sequence is
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
            }

            // Update the longest sequence found
            longestConsecutiveCount = Math.max(
                longestConsecutiveCount,
                currentConsecutiveCount
            );
        }
    }

    return longestConsecutiveCount;
};

// Explanation:
// Time Complexity: O(n)
// - Creating Set: O(n)
// - Each number is visited at most twice:
//   1. Once when we check if it's a sequence start
//   2. Once when it's part of a sequence we're counting
// - Total: O(n)

// Space Complexity: O(n) for the Set

// Example usage:
console.log('Testing O(n) solution:');
console.log('Input: [100, 4, 200, 1, 3, 2]');
console.log('Output:', longestConsecutive([100, 4, 200, 1, 3, 2])); // Should be 4 (1,2,3,4)

console.log('\nInput: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]');
console.log('Output:', longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Should be 9 (0,1,2,3,4,5,6,7,8)

