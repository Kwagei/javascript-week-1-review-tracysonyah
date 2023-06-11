//Create an array of objects representing students. 
//Each student should have properties for name and grade. 
//Write a function that takes the array of students and returns 
//an array of student names who have a grade higher than 90.

const students = [
    {
        name: "Hardin",
        grade: 50
    },

    {
        name: "Tracy",
        grade: 100
    },

    {
        name: "Federick",
        grade: 95
    },

    {
        name: "Vallyk",
        grade: 80
    }
];

function arrOfStudents(higherGrades) {
    studentNames = [];
    let index = 0;

    for(const student of higherGrades) {
        if(student.grade > 90) {
            studentNames[index] = student.name;
            index ++;
        }
    }
    return studentNames;
}
console.log(arrOfStudents(students))

// function arrOfStudents(higherGrades) {
//     studentNames = [];
//     for(let i = 0; i < higherGrades.length; i++) {
//         if(higherGrades[i].grade > 90) {
//             studentNames.push(higherGrades[i]. name)
//         }
//     }
//     return studentNames;
// }
// console.log(arrOfStudents(students));