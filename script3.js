function evenNums(arrOfNums) {
    emptyEven = [];
    for(let i = 0; i < arrOfNums.length; i++) {
        if(arrOfNums[i] % 2 === 0) {
            emptyEven[emptyEven.length] = arrOfNums[i];
        }
    }
    return emptyEven
}
console.log(evenNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));