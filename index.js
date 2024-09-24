// 1. Create a variable to store the singleton instance
let bankBranchInstance = null;

// 2. Define the BankBranch class
class BankBranch {
    constructor(branchInfo) {
        // Check if an instance already exists
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo; // Set branch info for the new instance
            bankBranchInstance = this; // Assign the new instance to the singleton variable
        }
        // Return the existing instance if already created
        return bankBranchInstance;
    }

    // 4. Method to get branch info
    getBranchInfo() {
        return this.branchInfo;
    }
}

// 5. Testing the Singleton pattern
const branchA = new BankBranch('Branch A - Main Street');
console.log(branchA.getBranchInfo()); // Output: Branch A - Main Street

const branchB = new BankBranch('Branch B - High Street');
console.log(branchB.getBranchInfo()); // Output: Branch A - Main Street

// Verifying that both instances are the same
console.log(branchA === branchB); // Output: true
