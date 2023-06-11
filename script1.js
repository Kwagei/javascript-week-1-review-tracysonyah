//Write a function that takes an array of numbers and returns the sum of the array.

function sumThis(arrOfNUms) {
    sumUp = 0;
    for(i = 0; i < arrOfNUms.length; i++) {
        sumUp += arrOfNUms[i];
    }
    return sumUp;
}
console.log(sumThis([5, 12, 53, 9.8]))