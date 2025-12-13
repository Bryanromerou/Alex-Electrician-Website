// Performance comparison of two longestConsecutive functions

// Function 1: Uses visitedMap
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
        // compare current with previous
        const difference = num - sortedNums[idx-1];
        // If difference is one then it should be consecutive
        if(difference === 1){
            currConsecutiveCount += 1;
        }else{
            currConsecutiveCount = 1;
        }
        longestConsecutiveCount = Math.max(currConsecutiveCount,longestConsecutiveCount)
    })
    return longestConsecutiveCount;
};

// Function 2: Uses Set to remove duplicates upfront
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
        // compare current with previous
        const difference = num - sortedNums[idx-1];
        // If difference is one then it should be consecutive
        if(difference === 1){
            currConsecutiveCount += 1;
        }else{
            currConsecutiveCount = 1;
        }
        longestConsecutiveCount = Math.max(currConsecutiveCount,longestConsecutiveCount)
    })
    return longestConsecutiveCount;
};

// Test data generators
function generateTestData(size, duplicateRatio = 0.3) {
    const nums = [];
    const uniqueCount = Math.floor(size * (1 - duplicateRatio));
    const duplicates = size - uniqueCount;
    
    // Generate unique numbers
    for (let i = 0; i < uniqueCount; i++) {
        nums.push(Math.floor(Math.random() * size * 2));
    }
    
    // Add duplicates
    for (let i = 0; i < duplicates; i++) {
        nums.push(nums[Math.floor(Math.random() * nums.length)]);
    }
    
    return nums;
}

// Performance test
function runPerformanceTest() {
    const testSizes = [100, 1000, 10000, 100000];
    const iterations = 10;
    
    console.log('Performance Comparison: longestConsecutive Functions\n');
    console.log('='.repeat(60));
    
    for (const size of testSizes) {
        console.log(`\nTest size: ${size} elements`);
        console.log('-'.repeat(60));
        
        let totalTime1 = 0;
        let totalTime2 = 0;
        
        for (let i = 0; i < iterations; i++) {
            const testData = generateTestData(size);
            const testDataCopy1 = [...testData];
            const testDataCopy2 = [...testData];
            
            // Test Function 1
            const start1 = performance.now();
            const result1 = longestConsecutive1(testDataCopy1);
            const end1 = performance.now();
            totalTime1 += (end1 - start1);
            
            // Test Function 2
            const start2 = performance.now();
            const result2 = longestConsecutive2(testDataCopy2);
            const end2 = performance.now();
            totalTime2 += (end2 - start2);
            
            // Verify both produce same result
            if (result1 !== result2) {
                console.error(`Results mismatch! Function 1: ${result1}, Function 2: ${result2}`);
            }
        }
        
        const avgTime1 = totalTime1 / iterations;
        const avgTime2 = totalTime2 / iterations;
        const speedup = ((avgTime1 - avgTime2) / avgTime1 * 100).toFixed(2);
        
        console.log(`Function 1 (visitedMap): ${avgTime1.toFixed(3)}ms avg`);
        console.log(`Function 2 (Set dedup):   ${avgTime2.toFixed(3)}ms avg`);
        console.log(`Speedup: ${speedup}% ${avgTime2 < avgTime1 ? '(Function 2 is faster)' : '(Function 1 is faster)'}`);
    }
}

// Run the test
runPerformanceTest();

