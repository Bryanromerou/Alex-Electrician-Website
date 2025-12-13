// Fixed implementation using Set to track node references
var hasCycle = function(head) {
    const visitedNodes = new Set();
    let currNode = head;

    while (currNode) {
        // Check if we've seen this exact node (by reference)
        if (visitedNodes.has(currNode)) {
            return true; // Cycle detected
        }
        
        // Add the node reference to the set
        visitedNodes.add(currNode);
        currNode = currNode.next;
    }
    
    return false; // No cycle found
};

// Alternative: Floyd's Cycle Detection (Tortoise and Hare)
// More space-efficient - O(1) space instead of O(n)
var hasCycleFloyd = function(head) {
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next;      // Move one step
        fast = fast.next.next; // Move two steps
    }
    
    return false; // No cycle found
};

