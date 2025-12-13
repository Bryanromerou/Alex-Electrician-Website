/**
 * LONGEST INCREASING SUBSEQUENCE - VISUAL DEMO
 * Run this to see exactly what happens step by step!
 */

function lengthOfLIS_Visual(nums) {
    console.log("=".repeat(60));
    console.log("STARTING LIS CALCULATION");
    console.log("=".repeat(60));
    console.log(`Input array: [${nums.join(', ')}]`);
    console.log();
    
    // Step 1: Initialize dp array
    const dp = new Array(nums.length).fill(1);
    console.log("Step 1: Initialize dp array (everyone starts with length 1)");
    console.log(`dp = [${dp.join(', ')}]`);
    console.log("(Each number by itself is a sequence of length 1)");
    console.log();
    
    // Step 2: Outer loop
    for (let i = 1; i < nums.length; i++) {
        console.log("-".repeat(60));
        console.log(`🔍 Checking position i = ${i} (number ${nums[i]})`);
        console.log(`   Current dp: [${dp.join(', ')}]`);
        console.log();
        
        let foundExtension = false;
        
        // Step 3: Inner loop
        for (let j = 0; j < i; j++) {
            const canStack = nums[j] < nums[i];
            const currentDpI = dp[i];
            const potentialNewLength = dp[j] + 1;
            
            console.log(`   Checking j = ${j} (number ${nums[j]})`);
            console.log(`   → Is ${nums[j]} < ${nums[i]}? ${canStack ? '✅ YES' : '❌ NO'}`);
            
            if (canStack) {
                const oldDpI = dp[i];
                dp[i] = Math.max(dp[i], dp[j] + 1);
                
                if (dp[i] > oldDpI) {
                    foundExtension = true;
                    console.log(`   → ✅ Can extend! dp[${i}] = max(${oldDpI}, ${dp[j]} + 1) = ${dp[i]}`);
                    console.log(`   →    This means: sequence ending at ${i} can be length ${dp[i]}`);
                } else {
                    console.log(`   → ⚠️  Can extend, but not better. dp[${i}] stays ${dp[i]}`);
                }
            } else {
                console.log(`   → ❌ Cannot extend (${nums[j]} is not < ${nums[i]})`);
            }
            console.log();
        }
        
        if (!foundExtension) {
            console.log(`   ℹ️  No valid extensions found. dp[${i}] stays 1`);
        }
        
        console.log(`   📊 Updated dp: [${dp.join(', ')}]`);
        console.log();
    }
    
    // Step 4: Find maximum
    console.log("=".repeat(60));
    console.log("FINAL RESULT");
    console.log("=".repeat(60));
    console.log(`Final dp array: [${dp.join(', ')}]`);
    console.log();
    
    const answer = Math.max(...dp);
    console.log(`Maximum value in dp: ${answer}`);
    console.log();
    console.log(`🎯 ANSWER: ${answer}`);
    console.log(`   This is the length of the longest increasing subsequence!`);
    console.log();
    
    // Show the actual sequence(s)
    console.log("Example sequences of this length:");
    findExampleSequences(nums, dp, answer);
    
    return answer;
}

// Helper function to find example sequences
function findExampleSequences(nums, dp, targetLength) {
    const sequences = [];
    
    function backtrack(current, index, remaining) {
        if (remaining === 0) {
            sequences.push([...current]);
            return;
        }
        
        if (index >= nums.length) return;
        
        // Try including nums[index] if it extends the sequence
        if (current.length === 0 || nums[index] > current[current.length - 1]) {
            if (dp[index] >= remaining) {
                current.push(nums[index]);
                backtrack(current, index + 1, remaining - 1);
                current.pop();
            }
        }
        
        // Try skipping nums[index]
        backtrack(current, index + 1, remaining);
    }
    
    backtrack([], 0, targetLength);
    
    // Show first few examples
    const uniqueSequences = [];
    const seen = new Set();
    
    for (const seq of sequences) {
        const key = seq.join(',');
        if (!seen.has(key)) {
            seen.add(key);
            uniqueSequences.push(seq);
            if (uniqueSequences.length >= 3) break;
        }
    }
    
    uniqueSequences.forEach((seq, idx) => {
        console.log(`   ${idx + 1}. [${seq.join(', ')}]`);
    });
}

// ============================================
// TEST IT OUT!
// ============================================

console.log("\n");
console.log("TEST 1: [10, 9, 2, 5, 3, 7, 101, 18]");
console.log("\n");
lengthOfLIS_Visual([10, 9, 2, 5, 3, 7, 101, 18]);

console.log("\n\n");
console.log("TEST 2: [0, 1, 0, 3, 2, 3]");
console.log("\n");
lengthOfLIS_Visual([0, 1, 0, 3, 2, 3]);

console.log("\n\n");
console.log("TEST 3: [7, 7, 7, 7, 7]");
console.log("\n");
lengthOfLIS_Visual([7, 7, 7, 7, 7]);

// ============================================
// SIMPLIFIED EXPLANATION
// ============================================

console.log("\n\n");
console.log("=".repeat(60));
console.log("SIMPLE ANALOGY");
console.log("=".repeat(60));
console.log(`
Think of it like building towers with numbered blocks:

1. Each block has a number
2. You can only stack a block on top if its number is BIGGER
3. dp[i] = "What's the tallest tower ending at position i?"

For each position i:
  - Look at all previous positions j
  - If nums[j] < nums[i], you can stack!
  - Take the tallest tower you can build: max(dp[i], dp[j] + 1)

At the end, find the tallest tower overall = longest sequence!
`);

