// Global variable to store the singleton instance
let bankBranchInstance = null;

// Define the BankBranch class
class BankBranch {
    constructor(branchName) {
        // Check if an instance already exists
        if (!bankBranchInstance) {
            // If no instance exists, create one
            this.branchName = branchName;
            bankBranchInstance = this;
        }

        // Return the existing instance
        return bankBranchInstance;
    }

    // Method to get branch info
    getBranchInfo() {
        return `Branch Name: ${this.branchName}`;
    }

    // Optional: Method to set new branch info
    setBranchInfo(newName) {
        this.branchName = newName;
    }
}

// Usage of the Singleton pattern
const branchA = new BankBranch("Main Branch");  // First instance
const branchB = new BankBranch("Secondary Branch");  // Attempt to create a second instance

// Display the branch info for both instances with clickable links
const outputElement = document.getElementById('output');
outputElement.innerHTML = `
    <a href="#" id="branchALink">Branch A Info: ${branchA.getBranchInfo()}</a> <br>
    <a href="#" id="branchBLink">Branch B Info: ${branchB.getBranchInfo()}</a> <br>
    Are both instances the same? ${branchA === branchB}
`;

// Adding click event listeners to show the branch details when a link is clicked
document.getElementById('branchALink').addEventListener('click', function(e) {
    e.preventDefault();
    showBranchDetails();
});

document.getElementById('branchBLink').addEventListener('click', function(e) {
    e.preventDefault();
    showBranchDetails();
});

// Function to display the Main Branch details
function showBranchDetails() {
    const branchDetails = document.getElementById('branchDetails');
    branchDetails.style.display = 'block';  // Show the branch details section
}
