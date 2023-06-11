//Create an object called "circle" with properties radius. 
//Create a method on the object that calculates the circumference
//of the circle based on its radius.

const circle = {
    radius: 90,
    
    calculateCircum: function() {
        PI = 3.14
        const circumference = 3.14 * PI * this.radius;
        return circumference;
    }
}
console.log(circle.calculateCircum());