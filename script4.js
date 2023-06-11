//Write a function that takes an array of numbers and returns an array of the numbers in reverse order.

function reverseIt(arrOfNums) {
    let reverse = [];
    for(let i = arrOfNums.length - 1; i >= 0; i--) {
        reverse[reverse.length] = arrOfNums[i];
    }
    return reverse;
}
console.log(reverseIt([10, 20, 30, 40, 50]));