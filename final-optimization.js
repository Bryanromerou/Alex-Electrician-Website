// Final optimized version with visited tracking

// Best performing: If statement + Set iteration
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestConsecutiveCount = 0;

    for (const num of numSet) {
        // Only start counting from the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            // Count how long this consecutive sequence is
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
            }

            // Use if statement instead of Math.max (slightly faster)
            if (currentConsecutiveCount > longestConsecutiveCount) {
                longestConsecutiveCount = currentConsecutiveCount;
            }
        }
    }

    return longestConsecutiveCount;
};

// Alternative: If you need to iterate the original array (e.g., for specific order)
var longestConsecutiveWithVisited = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    const visited = new Set();
    let longestConsecutiveCount = 0;

    for (const num of nums) {
        // Skip if already processed
        if (visited.has(num)) {
            continue;
        }
        
        // Only start counting from the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;
            visited.add(currentNum);

            // Count how long this consecutive sequence is
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
                visited.add(currentNum);
            }

            if (currentConsecutiveCount > longestConsecutiveCount) {
                longestConsecutiveCount = currentConsecutiveCount;
            }
        } else {
            visited.add(num);
        }
    }

    return longestConsecutiveCount;
};

// Test
console.log('Testing optimized solution:');
console.log('Input: [100, 4, 200, 1, 3, 2]');
console.log('Output:', longestConsecutive([100, 4, 200, 1, 3, 2])); // Should be 4

console.log('\nInput: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]');
console.log('Output:', longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Should be 9

console.log('\n=== Optimization Summary ===');
console.log('1. Use Set for O(1) lookups');
console.log('2. Only start sequences from sequence beginnings (num-1 not in set)');
console.log('3. Use if statement instead of Math.max (small performance gain)');
console.log('4. Iterate Set instead of array (avoids duplicate checks)');
console.log('\nTime Complexity: O(n) - optimal');
console.log('Space Complexity: O(n) - for the Set');

