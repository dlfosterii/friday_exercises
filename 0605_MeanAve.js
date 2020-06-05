// Find the mean, median, and mode of the following array:
// [4, 3, 1 , 2 , 2 , 7, 9, 14, 2 , 27, 400, 9, 1 , 8 ]
// Mean : Average of all the numbers
// Median : Number at exact middle of sorted array
// Mode: The number that appears the most times

let testArray = [4, 3, 1 , 2 , 2 , 7, 9, 14, 2 , 27, 400, 9, 1 , 8 ];
let testArray2 = [4, 2, 6];

function mean(array) {
    let divisor = array.length;
    let sum = array.reduce(function(a, b){
        return a + b
    },0);
    return (sum / divisor)
};

console.log(mean(testArray))

function median(array) {
    let sortedArray = array.sort;
    console.log(sortedArray)
    let arrayLength = array.length;
    let midPoint = arrayLength / 2;
    return array[midPoint];
};

console.log(median(testArray2))


function findMode(arr){
    //tind the thing that occurs the most
    //return that thing

    let frequency = {};

    for (let num of arr){
        if(frequency[num]){
            frequency[num] = frequency[num] +1;
        }else {
            frequency[num] = 1;
        }
    };
    let most = arr[0];
    for (let num of arr) {
        if (frequency[num]) > (frequency[most]) {
            most = num
        }
    }
    return most
};