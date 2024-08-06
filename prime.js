// Write a JavaScript function to get an array and to read the first element of an array. 
//Check whether it is prime or not.
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to check if the first element of an array is prime
function checkFirstElementPrime(arr) {
    if (arr.length === 0) return "Array is empty";
    return isPrime(arr[0]) ? "First element is prime" : "First element is not prime";
}

// Example usage
const myArray = [7, 10, 15];
console.log(checkFirstElementPrime(myArray)); 
