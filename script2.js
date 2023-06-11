//Write a function that takes an array of strings and returns the longest string in the array.

function longestStr(arrOfStr) {
    longStr = '';
    for(let i = 0; i < arrOfStr.length; i++) {
        if(arrOfStr[i].length > longStr.length) {
            longstr = arrOfStr[i]
        }
    }
    return longstr
}
console.log(longestStr(['first', 'come', 'iterate']));