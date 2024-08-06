//Write a JavaScript program to find the most frequent item of an array
function Frequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent;

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

const Array = [1, 3, 2, 3, 4, 4,4,4,4,4,4,4,1, 3, 2, 1, 3, 3];


const Frequentnum = Frequent(Array);
console.log("Array:", Array);
console.log("Most frequent item:", Frequentnum);
