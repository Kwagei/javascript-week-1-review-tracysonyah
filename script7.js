//Create an array of objects representing books. 
//Each book should have properties for title and author. 
//Write a function that takes the array of books and returns an array of book titles.

const bookshop = [
    {
        title: "The downside of falling in love",
        author: "Jane Austin"
    },
    
    {
        title: "You gotta be hungry",
        author: "Antoinette Sedan"
    },

    {
        title: "Pride and Prejustice",
        author: "Janes Austin"
    }
];

function arrOfBooks(arrOfTitles) {
    emptyArr = [];
    let index = 0;

    for(const book of arrOfTitles) {
        emptyArr[index] = book.title;
        index ++;
    }
    return emptyArr;
}
console.log(arrOfBooks(bookshop));

// function arrOfBooks(arrOfTitles) {
//     emptyArr = [];
//     for(i = 0; i < arrOfTitles.length; i++) {
//         emptyArr.push(arrOfTitles[i].title)
//     }
//     return emptyArr;
// }

// console.log(arrOfBooks(bookshop));