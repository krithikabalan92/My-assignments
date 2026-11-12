//Step 1: Declare and initialize numbers in ascending order (with one missing number)
const numbers = [20, 21, 23, 24]; 

// Function to find the missing number by comparing neighbors
function findMissingNumber(numbers) {
    // Step 3: Traverse the numbers using a loop and compare neighboring values
    for (let i = 0; i < numbers.length - 1; i++) {
        // console.log(numbers[i])
        const currentNumber = numbers[i];
        const nextNumber = numbers[i + 1];
        console.log("current and next number",currentNumber, nextNumber)
        // Check if the gap between neighbors is greater than 1
        if (nextNumber - currentNumber !== 1) {
            // Step 4: Identify the missing number (it should be currentNumber + 1)
            return currentNumber + 1;
        }
    }
    
    return -1; // Returns -1 if no number is missing
}

// Step 5: Test the program with the sample input and display the result
const missingNum = findMissingNumber(numbers);
console.log("The missing number is:", missingNum);