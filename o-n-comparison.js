// Performance comparison: O(n log n) vs O(n) solutions

// Function 1: O(n log n) with visitedMap
var longestConsecutive1 = function(nums) {
    if(nums.length===0){
        return 0;
    }
    
    const visitedMap = {};
    const sortedNums = nums.sort((a,b)=>a-b);
    let currConsecutiveCount = 1;
    let longestConsecutiveCount = 1;
    sortedNums.forEach((num, idx)=>{
        if(visitedMap[num]){
            return;
        }
        visitedMap[num] = true;
        if(idx === 0){
           return; 
        }
        const difference = num - sortedNums[idx-1];
        if(difference === 1){
            currConsecutiveCount += 1;
        }else{
            currConsecutiveCount = 1;
        }
        longestConsecutiveCount = Math.max(currConsecutiveCount,longestConsecutiveCount)
    })
    return longestConsecutiveCount;
};

// Function 2: O(n log n) with Set deduplication
var longestConsecutive2 = function(nums) {
    if(nums.length===0){
        return 0;
    }
    const sortedNums = [...new Set(nums)].sort((a,b)=>a-b);
    let currConsecutiveCount = 1;
    let longestConsecutiveCount = 1;
    sortedNums.forEach((num, idx)=>{
        if(idx === 0){
           return; 
        }
        const difference = num - sortedNums[idx-1];
        if(difference === 1){
            currConsecutiveCount += 1;
        }else{
            currConsecutiveCount = 1;
        }
        longestConsecutiveCount = Math.max(currConsecutiveCount,longestConsecutiveCount)
    })
    return longestConsecutiveCount;
};

// Function 3: O(n) optimized solution
var longestConsecutive3 = function(nums) {
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

            longestConsecutiveCount = Math.max(
                longestConsecutiveCount,
                currentConsecutiveCount
            );
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
    const testSizes = [100, 1000, 10000, 100000, 1000000];
    const iterations = 10;
    
    console.log('Performance Comparison: O(n log n) vs O(n) Solutions\n');
    console.log('='.repeat(80));
    
    for (const size of testSizes) {
        console.log(`\nTest size: ${size.toLocaleString()} elements`);
        console.log('-'.repeat(80));
        
        let totalTime1 = 0;
        let totalTime2 = 0;
        let totalTime3 = 0;
        
        for (let i = 0; i < iterations; i++) {
            const testData = generateTestData(size);
            const testDataCopy1 = [...testData];
            const testDataCopy2 = [...testData];
            const testDataCopy3 = [...testData];
            
            // Test Function 1 (visitedMap)
            const start1 = performance.now();
            const result1 = longestConsecutive1(testDataCopy1);
            const end1 = performance.now();
            totalTime1 += (end1 - start1);
            
            // Test Function 2 (Set dedup)
            const start2 = performance.now();
            const result2 = longestConsecutive2(testDataCopy2);
            const end2 = performance.now();
            totalTime2 += (end2 - start2);
            
            // Test Function 3 (O(n))
            const start3 = performance.now();
            const result3 = longestConsecutive3(testDataCopy3);
            const end3 = performance.now();
            totalTime3 += (end3 - start3);
            
            // Verify all produce same result
            if (result1 !== result2 || result2 !== result3) {
                console.error(`Results mismatch! F1: ${result1}, F2: ${result2}, F3: ${result3}`);
            }
        }
        
        const avgTime1 = totalTime1 / iterations;
        const avgTime2 = totalTime2 / iterations;
        const avgTime3 = totalTime3 / iterations;
        
        console.log(`Function 1 (visitedMap, O(n log n)): ${avgTime1.toFixed(3)}ms avg`);
        console.log(`Function 2 (Set dedup, O(n log n)):  ${avgTime2.toFixed(3)}ms avg`);
        console.log(`Function 3 (Optimized, O(n)):        ${avgTime3.toFixed(3)}ms avg`);
        
        const speedup2 = ((avgTime1 - avgTime2) / avgTime1 * 100).toFixed(1);
        const speedup3 = ((avgTime1 - avgTime3) / avgTime1 * 100).toFixed(1);
        
        console.log(`\nSpeedup vs Function 1:`);
        console.log(`  Function 2: ${speedup2}%`);
        console.log(`  Function 3: ${speedup3}% (${(avgTime1 / avgTime3).toFixed(2)}x faster)`);
    }
}

// Run the test
runPerformanceTest();

