// Testing micro-optimizations for the O(n) solution

// Original O(n) solution
var longestConsecutive1 = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestConsecutiveCount = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
            }

            longestConsecutiveCount = Math.max(
                longestConsecutiveCount,
                currentConsecutiveCount
            );
        }
    }

    return longestConsecutiveCount;
};

// Optimization 1: Avoid Math.max, use if statement
var longestConsecutive2 = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestConsecutiveCount = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
            }

            if (currentConsecutiveCount > longestConsecutiveCount) {
                longestConsecutiveCount = currentConsecutiveCount;
            }
        }
    }

    return longestConsecutiveCount;
};

// Optimization 2: Iterate original array instead of Set
var longestConsecutive3 = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestConsecutiveCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
            }

            if (currentConsecutiveCount > longestConsecutiveCount) {
                longestConsecutiveCount = currentConsecutiveCount;
            }
        }
    }

    return longestConsecutiveCount;
};

// Optimization 3: Use Map instead of Set (might be faster for lookups?)
var longestConsecutive4 = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numMap = new Map();
    for (const num of nums) {
        numMap.set(num, true);
    }

    let longestConsecutiveCount = 0;

    for (const num of numMap.keys()) {
        if (!numMap.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            while (numMap.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
            }

            if (currentConsecutiveCount > longestConsecutiveCount) {
                longestConsecutiveCount = currentConsecutiveCount;
            }
        }
    }

    return longestConsecutiveCount;
};

// Optimization 4: Combine optimizations 1 + 3 (if statement + iterate array)
var longestConsecutive5 = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestConsecutiveCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // Skip if we've already processed this number as part of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentConsecutiveCount++;
            }

            if (currentConsecutiveCount > longestConsecutiveCount) {
                longestConsecutiveCount = currentConsecutiveCount;
            }
        }
    }

    return longestConsecutiveCount;
};

// Optimization 5: Use object instead of Set (might be faster?)
var longestConsecutive6 = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numObj = {};
    for (const num of nums) {
        numObj[num] = true;
    }

    let longestConsecutiveCount = 0;

    for (const num of nums) {
        if (!numObj[num - 1]) {
            let currentNum = num;
            let currentConsecutiveCount = 1;

            while (numObj[currentNum + 1]) {
                currentNum++;
                currentConsecutiveCount++;
            }

            if (currentConsecutiveCount > longestConsecutiveCount) {
                longestConsecutiveCount = currentConsecutiveCount;
            }
        }
    }

    return longestConsecutiveCount;
};

// Test data generator
function generateTestData(size, duplicateRatio = 0.3) {
    const nums = [];
    const uniqueCount = Math.floor(size * (1 - duplicateRatio));
    const duplicates = size - uniqueCount;
    
    for (let i = 0; i < uniqueCount; i++) {
        nums.push(Math.floor(Math.random() * size * 2));
    }
    
    for (let i = 0; i < duplicates; i++) {
        nums.push(nums[Math.floor(Math.random() * nums.length)]);
    }
    
    return nums;
}

// Performance test
function runPerformanceTest() {
    const testSizes = [1000, 10000, 100000, 1000000];
    const iterations = 20;
    
    console.log('Micro-Optimization Comparison for O(n) Solution\n');
    console.log('='.repeat(90));
    
    for (const size of testSizes) {
        console.log(`\nTest size: ${size.toLocaleString()} elements`);
        console.log('-'.repeat(90));
        
        const times = {
            '1. Original (Set, for...of, Math.max)': [],
            '2. If statement instead of Math.max': [],
            '3. Iterate array instead of Set': [],
            '4. Map instead of Set': [],
            '5. Array + if statement': [],
            '6. Object instead of Set': []
        };
        
        for (let i = 0; i < iterations; i++) {
            const testData = generateTestData(size);
            const copies = Array(6).fill(null).map(() => [...testData]);
            
            // Test all versions
            const start1 = performance.now();
            const result1 = longestConsecutive1(copies[0]);
            times['1. Original (Set, for...of, Math.max)'].push(performance.now() - start1);
            
            const start2 = performance.now();
            const result2 = longestConsecutive2(copies[1]);
            times['2. If statement instead of Math.max'].push(performance.now() - start2);
            
            const start3 = performance.now();
            const result3 = longestConsecutive3(copies[2]);
            times['3. Iterate array instead of Set'].push(performance.now() - start3);
            
            const start4 = performance.now();
            const result4 = longestConsecutive4(copies[3]);
            times['4. Map instead of Set'].push(performance.now() - start4);
            
            const start5 = performance.now();
            const result5 = longestConsecutive5(copies[4]);
            times['5. Array + if statement'].push(performance.now() - start5);
            
            const start6 = performance.now();
            const result6 = longestConsecutive6(copies[5]);
            times['6. Object instead of Set'].push(performance.now() - start6);
            
            // Verify all produce same result
            const results = [result1, result2, result3, result4, result5, result6];
            if (!results.every(r => r === results[0])) {
                console.error('Results mismatch!', results);
            }
        }
        
        // Calculate averages
        const averages = Object.entries(times).map(([name, timeArray]) => ({
            name,
            avg: timeArray.reduce((a, b) => a + b, 0) / timeArray.length
        }));
        
        // Sort by performance
        averages.sort((a, b) => a.avg - b.avg);
        
        // Display results
        const baseline = averages[0].avg;
        averages.forEach(({ name, avg }, idx) => {
            const speedup = idx === 0 ? '' : ` (${((baseline / avg) * 100 - 100).toFixed(1)}% slower)`;
            console.log(`${name.padEnd(45)}: ${avg.toFixed(3)}ms avg${speedup}`);
        });
        
        console.log(`\nFastest: ${averages[0].name}`);
    }
}

// Run the test
runPerformanceTest();

