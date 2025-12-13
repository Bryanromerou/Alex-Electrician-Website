/**
 * Visual Learning Tool: Longest Palindromic Substring
 * 
 * This file demonstrates the algorithm with detailed step-by-step visualization.
 * Run this to see exactly how the algorithm works!
 */

function longestPalindromeVisual(s: string): string {
    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left: number, right: number, type: string): number {
        console.log(`\n  🔍 Expanding ${type} from center:`);
        console.log(`     Initial: left=${left} (${s[left] || '?'}), right=${right} (${s[right] || '?'})`);
        
        let steps = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            console.log(`     Step ${++steps}: Match! ${s[left]} === ${s[right]}`);
            console.log(`     Current palindrome: "${s.substring(left, right + 1)}"`);
            left--;
            right++;
        }
        
        const length = right - left - 1;
        const palindrome = s.substring(left + 1, right);
        console.log(`     ✨ Found palindrome: "${palindrome}" (length: ${length})`);
        
        return length;
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Finding longest palindrome in: "${s}"`);
    console.log(`String indices: ${s.split('').map((_, i) => i).join(' ')}`);
    console.log(`String chars:   ${s.split('').map(c => ` ${c} `).join(' ')}`);
    console.log(`${'='.repeat(60)}`);

    for (let i = 0; i < s.length; i++) {
        console.log(`\n📍 Position ${i}: Character '${s[i]}'`);
        console.log(`${'-'.repeat(60)}`);
        
        // Odd-length check
        const len1 = expandAroundCenter(i, i, `ODD (center at '${s[i]}')`);
        
        // Even-length check
        if (i < s.length - 1) {
            const len2 = expandAroundCenter(i, i + 1, `EVEN (center between '${s[i]}' and '${s[i+1]}')`);
            
            const len = Math.max(len1, len2);
            if (len > maxLength) {
                const oldMax = maxLength;
                maxLength = len;
                start = i - Math.floor((len - 1) / 2);
                console.log(`\n  🎯 NEW LONGEST FOUND!`);
                console.log(`     Previous max: ${oldMax}`);
                console.log(`     New max: ${maxLength}`);
                console.log(`     Palindrome: "${s.substring(start, start + maxLength)}"`);
                console.log(`     Start index: ${start}`);
            } else {
                console.log(`\n  ℹ️  Max length: ${len}, Current best: ${maxLength}`);
            }
        } else {
            if (len1 > maxLength) {
                const oldMax = maxLength;
                maxLength = len1;
                start = i - Math.floor((len1 - 1) / 2);
                console.log(`\n  🎯 NEW LONGEST FOUND!`);
                console.log(`     Previous max: ${oldMax}`);
                console.log(`     New max: ${maxLength}`);
                console.log(`     Palindrome: "${s.substring(start, start + maxLength)}"`);
            }
        }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`✅ FINAL RESULT: "${s.substring(start, start + maxLength)}"`);
    console.log(`   Length: ${maxLength}`);
    console.log(`   Start index: ${start}`);
    console.log(`${'='.repeat(60)}\n`);

    return s.substring(start, start + maxLength);
}

// Test with examples
console.log("\n" + "=".repeat(60));
console.log("EXAMPLE 1: 'babad'");
console.log("=".repeat(60));
longestPalindromeVisual("babad");

console.log("\n\n" + "=".repeat(60));
console.log("EXAMPLE 2: 'cbbd'");
console.log("=".repeat(60));
longestPalindromeVisual("cbbd");

console.log("\n\n" + "=".repeat(60));
console.log("EXAMPLE 3: 'racecar'");
console.log("=".repeat(60));
longestPalindromeVisual("racecar");

