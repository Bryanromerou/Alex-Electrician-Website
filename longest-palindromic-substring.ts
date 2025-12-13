/**
 * Longest Palindromic Substring
 * 
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Approach: Expand Around Centers (Two-Pointer Technique)
 * 
 * KEY LEARNING: This pattern teaches us:
 * 1. Two-pointer technique for symmetry problems
 * 2. How to avoid redundant work by using problem structure
 * 3. Handling both odd and even-length cases systematically
 * 
 * Time Complexity: O(n²) - For each of n positions, we expand up to n/2 times
 * Space Complexity: O(1) - Only using a few variables
 * 
 * ALTERNATIVE APPROACHES:
 * - Brute Force: O(n³) - Check every substring
 * - Dynamic Programming: O(n²) time and space
 * - Manacher's Algorithm: O(n) time but more complex
 */

function longestPalindrome(s: string): string {
    // Edge case: strings of length 0 or 1 are already palindromes
    if (s.length < 2) {
        return s;
    }

    let start = 0;      // Starting index of longest palindrome found
    let maxLength = 1;  // Length of longest palindrome found

    /**
     * CORE PATTERN: Expand Around Center
     * 
     * This is the heart of the algorithm. We start with two pointers
     * (left and right) and expand outward while characters match.
     * 
     * Example with "aba" (center at index 1):
     *   Initial: left=1, right=1, s[1]='b'
     *   Expand:  left=0, right=2, s[0]='a', s[2]='a' ✓ match!
     *   Expand:  left=-1, right=3 (out of bounds, stop)
     *   Result:  length = 3 - (-1) - 1 = 3
     * 
     * @param left - Starting left position (inclusive)
     * @param right - Starting right position (inclusive)
     * @returns The length of the palindrome found
     */
    function expandAroundCenter(left: number, right: number): number {
        // Expand outward while:
        // 1. We're still within bounds (left >= 0, right < length)
        // 2. Characters match (s[left] === s[right])
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;   // Move left pointer outward
            right++;  // Move right pointer outward
        }
        
        // IMPORTANT: Why (right - left - 1)?
        // When the loop exits, left and right are ONE STEP BEYOND the valid palindrome
        // 
        // Example: Palindrome from index 1 to 3 ("aba" in "babad")
        //   Last valid: left = 1, right = 3
        //   After loop: left = 0, right = 4 (we decremented/incremented one extra time)
        //   Length = 4 - 0 - 1 = 3 ✓
        return right - left - 1;
    }

    // Try every possible center position
    for (let i = 0; i < s.length; i++) {
        // CASE 1: Odd-length palindromes
        // Center is at a single character (e.g., "aba" - center is 'b')
        // Start with left = right = i
        const len1 = expandAroundCenter(i, i);
        
        // CASE 2: Even-length palindromes
        // Center is between two characters (e.g., "abba" - center between the two 'b's)
        // Start with left = i, right = i+1
        const len2 = expandAroundCenter(i, i + 1);
        
        // Take the maximum length found from both cases
        const len = Math.max(len1, len2);
        
        // Update our answer if we found a longer palindrome
        if (len > maxLength) {
            maxLength = len;
            
            // Calculate the starting index of this palindrome
            // 
            // For odd-length (len1): 
            //   If len=3 and i=1, palindrome is from index 0 to 2
            //   start = 1 - floor((3-1)/2) = 1 - 1 = 0 ✓
            //
            // For even-length (len2):
            //   If len=4 and i=1, palindrome is from index 0 to 3
            //   start = 1 - floor((4-1)/2) = 1 - 1 = 0 ✓
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}

// Test cases
console.log("Test 1:");
console.log("Input: 'babad'");
console.log("Output:", longestPalindrome("babad")); // Expected: "bab" or "aba"

console.log("\nTest 2:");
console.log("Input: 'cbbd'");
console.log("Output:", longestPalindrome("cbbd")); // Expected: "bb"

console.log("\nTest 3:");
console.log("Input: 'a'");
console.log("Output:", longestPalindrome("a")); // Expected: "a"

console.log("\nTest 4:");
console.log("Input: 'ac'");
console.log("Output:", longestPalindrome("ac")); // Expected: "a" or "c"

console.log("\nTest 5:");
console.log("Input: 'racecar'");
console.log("Output:", longestPalindrome("racecar")); // Expected: "racecar"

