//Write a JavaScript program to find the sum of squares of the elements of an array
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] * arr[i];
    }
    return sum;
}
const Arr= [2, 3,4 , 5, 10];
console.log("The sum of squares is: " + sum(Arr)); 
