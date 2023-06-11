//create a person object and create a method on the person object 
//to update the name on the person object

const person = {
    name: 'Tracy',

    updateNewName(newName) {
        this.name = newName;
    }
}

console.log(person.name);

person.updateNewName = 'Peter Supet';
console.log(person.updateNewName);